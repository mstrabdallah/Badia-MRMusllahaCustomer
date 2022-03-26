import 'axios';
const state = {
  loading: true,
  data: [],
  cart: [],
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
      state.data = res.data.data
      state.loading = false
    })
  },

  async addToCart({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('service_id', dataObj)

    state.loading = true
    this.$axios.post('/cart/add', data).then((res) => {
      state.cart = res.data
      if (res.data.status === 200) {
        alert(res.data.msg)
        dispatch('getListCart')
      } else {
        alert(res.data.msg)
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
