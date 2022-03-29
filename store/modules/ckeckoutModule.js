import 'axios';
const state = {
  loading: true,
  loadingForAddress: true,
  data: [],
  order: [],
  DateMessage: '',
  msg:'',
  CartEmptyMessage: '',
}

const getters = {
  AllListOfTime: (state) => state,
}

const actions = {


  async getListOfTime({ state, dispatch }, date) {
    var data = new FormData()
    data.append('date', date)
    state.loading = true
    this.$axios.post('/cart/getListOfTime', data).then((res) => {
      state.loading = false

      state.time = res.data
      if (res.data.status === 200) {
        // state.msg = res.data.msg;
        //  state.DateMessage = res.data.msg;
        // setTimeout(() => dispatch('getListCart'), 1000)
      } else {
        state.DateMessage = res.data.msg
      }
      state.loading = false
    })
  },

  async CheckOut({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('payment_method', dataObj.payment)
    data.append('address_id', dataObj.address)
    data.append('date', dataObj.date)
    data.append('time', dataObj.time)
    data.append('city_id', '1')

    this.$axios.post('/Order/checkout', data).then((res) => {
      state.loading = true
      state.order = res.data
      if (res.data.status === 200) {
        state.msg = res.data.msg

        dispatch('getListCart')
        if (this.$i18n.locale === 'en') {
          window.location.href = '/ListOrder'
        } else {
          window.location.href = '/ar/ListOrder'
        }
      } else {
        state.CartEmptyMessage = res.data.msg
      }
      state.loading = false
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
