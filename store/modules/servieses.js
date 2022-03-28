import 'axios';
const state = {
  loading: true,
  data: [],
  cart: [],
  serviceMsg:'',
}

const getters = {
  allservices: (state) => state,
}

const actions = {
  async getservices({ state }, id) {
    // alert(id)
    state.loading = true
    state.data = []
    await this.$axios.get('/Service/' + id).then((res) => {
      // state.serviceMsg = res.data.msg;
      state.data = res.data.data
      state.loading = false
    })
  },

  async addToCart({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('service_id', dataObj)

    this.$axios.post('/cart/add', data).then((res) => {
      state.loading = true
      state.cart = res.data
      if (res.data.status === 200) {
      state.serviceMsg = res.msg;

        alert(res.data.msg)
        dispatch('getListCart', 'getservices')
      } else {
        // alert(res.data.msg)
      state.serviceMsg = res.msg;

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
