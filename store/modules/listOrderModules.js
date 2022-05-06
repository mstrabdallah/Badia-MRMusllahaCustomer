const state = {
  loading: true,
  loadingForAddress: true,
  data: [],
  order: [],
  DateMessage: '',
  msg: '',
  CartEmptyMessage: '',
  loadingReschedule: false,
  ReScheduleShow: false,
  loadingAc: false,
  loadingACancel: false,
  paramters: '',
}

const getters = {
  AllListOforder: state => state,
}

const actions = {



  async ListOfOrder({ state }, { paramters, page = 1 }) {
    if (paramters != null) state.paramters = paramters;

    state.loading = true;
    state.orders = []
     
      await this.$axios.get("/Order?" + state.paramters + "&include=partner,customer,services,category&page=" + page).then((res) => {
        state.data = res.data
      state.loading = false;
    });
  },

  async reschedule({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('date', dataObj.date)
    data.append('time', dataObj.time)

    state.loadingReschedule = true

    this.$axios.post('/Order/rescheduleOrder/' + dataObj.order_id, data).then((res) => {

      state.loadingReschedule = false

      if (res.data.status === 200) {
        state.ReScheduleShow = false
        dispatch('ListOfOrder')
        dispatch('setToast', { title: 'Rescheduled successfully', des: '...' })

      } else {
        dispatch('setMsg', { msg: res.data.msg, errors: res.data.errors, api: 'rescheduleOrder', type: 'error' })
      }
    })
  },
  async cancelOrder({ state, dispatch }, dataObj) {
    state.loadingACancel = true
    this.$axios.post('/Order/cancelOrder/' + dataObj).then((res) => {
      state.loadingACancel = false
      if (res.data.status === 200) {
        dispatch('setToast', { title: 'The request has been successfully cancelled', des: '...' })
        dispatch('ListOfOrder')
      } else {

      }
    })
  },
  completeOrder({ state, dispatch }, dataObj) {
    state.loadingAc = true
    this.$axios.post('/Order/completeOrder/' + dataObj).then((res) => {
      state.loadingAc = false

      if (res.data.status === 200) {
        dispatch('ListOfOrder')
      } else {

      }
    })
  },
}

const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations,
}
