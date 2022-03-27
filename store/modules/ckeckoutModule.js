import 'axios';
const state = {
  loading: true,
  data: [],
  time: [],
  DateMessage:'',
  cartLength:0
}

const getters = {
  AllListOfTime: (state) => state,
}

const actions = {
  // async getListCart({ state }) {
  //   // alert(id)
  //   state.loading = true
  //   state.data = []
  //   await this.$axios.get('/cart' ).then((res) => {
  //     state.data = res.data.data
  //     state.cartLength = res.data.data.services.length
  //     state.loading = false
  //   })
  // },

  async getListOfTime({ state , dispatch }, date) {



    var data = new FormData()
    data.append('date', date)


    state.loading = true
     this.$axios.post('/cart/getListOfTime', data).then((res) => {
      state.loading = false;

       state.time = res.data
       if (res.data.status === 200) {
        // state.msg = res.data.msg;
        //  state.DateMessage = res.data.msg;


    // setTimeout(() => dispatch('getListCart'), 1000)
       }

       else {
        //  alert(res.data.msg)
         state.DateMessage = res.data.msg;

       }
       state.loading = false
     }
     )
  },



  // async DeleteCart({ state }, dataObj) {

  //   var data = new FormData()
  //   data.append('service_id', dataObj)

  //   state.loading = true
  //    this.$axios.post('/cart/remove', data).then((res) => {
  //      state.cart = res.data
  //      if (res.data.status === 200) {
  //        alert(res.data.msg)
  //      } else {
  //        alert(res.data.msg)
  //      }
  //      state.loading = false
  //    })
  // },
}

const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations,
}
