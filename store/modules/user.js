import 'axios';
const state = {
  loading: true,
  userData: [],

}

const getters = {
  userData: (state) => state,
}

const actions = {


  async getUserData({ state }) {
    // alert(id)
    state.loading = true
    state.data = []
    await this.$axios.get('/me' ).then((res) => {
      state.data = res.data.data
      state.cartLength = res.data.data.services.length
      state.loading = false
    })
  },

  async UpdateCart({ state }, Obj) {

    console.log(Obj);
    // console.log(id);
    var data = new FormData()
    data.append('service_id', Obj.id)
    data.append('quantity', Obj.quantity)

    state.loading = true
     this.$axios.post('/cart/update', data).then((res) => {
       state.cart = res.data
       if (res.data.status === 200) {
         alert(res.data.msg)
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
