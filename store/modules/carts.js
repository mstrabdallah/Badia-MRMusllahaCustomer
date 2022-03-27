import 'axios';
const state = {
  loading: true,
  data: [],
  cart: [],
  msg:'',
  cartLength:0
}

const getters = {
  AllListOfCarts: (state) => state,
}

const actions = {
  async getListCart({ state }) {
    // alert(id)
    state.loading = true
    state.data = []
    await this.$axios.get('/cart' ).then((res) => {
      state.data = res.data.data
      state.cartLength = res.data.data.services.length
      state.loading = false
    })
  },

  async UpdateCart({ state , dispatch }, Obj) {

    // console.log(Obj);
    // console.log(id);
    var data = new FormData()
    data.append('service_id', Obj.id)
    data.append('quantity', Obj.quantity)

    state.loading = true
     this.$axios.post('/cart/update', data).then((res) => {
       state.cart = res.data
       if (res.data.status === 200) {
         state.msg = res.data.msg;


    setTimeout(() => dispatch('getListCart'), 1000)
       } else {
         alert(res.data.msg)
         state.msg = res.data.msg;

       }
       state.loading = false
     })
  },



  async DeleteCart({ state }, dataObj) {

    var data = new FormData()
    data.append('service_id', dataObj)

    state.loading = true
     this.$axios.post('/cart/remove', data).then((res) => {
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
