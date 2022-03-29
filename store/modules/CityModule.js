import 'axios';
const state = {
  loading: true,
  data: [],
  cites: [],

}

const getters = {
  AllCityDeatils: (state) => state,
}

const actions = {
   getCity({ state }) {
    // alert(id)
    state.loading = true
    state.data = []
     this.$axios.get('/City' ).then((res) => {
      // console.log(state.data);
      state.data = res.data
      state.loading = false
    })
  },



  // Pindding to code state if user update city on service page

  async UpdateCity({ state , dispatch }, id) {

    var data = new FormData()
    data.append('city_id', id)
    this.$cookies.set('city_id', id)

    state.loading = true
     await this.$axios.post('/me/CustomerUpdateCity', data).then((res) => {
       state.cites = res.data
       if (res.data.status === 200) {
         alert(res.data.msg)
       } else {
         alert(res.data.msg)
       }
       state.loading = false
     })

     dispatch("getservices")
  },



  // async UpdateCityOnService({ state , dispatch }, CityId, ServID) {

  //   var data = new FormData()
  //   data.append('city_id', CityId)
  //   this.$cookies.set('city_id', CityId)

  //   state.loading = true
  //    await this.$axios.post('/me/CustomerUpdateCity', data).then((res) => {
  //      state.cites = res.data
  //      if (res.data.status === 200) {
  //        alert(res.data.msg)
  //      } else {
  //        alert(res.data.msg)
  //      }
  //      state.loading = false
  //    })

  //    dispatch("getservices", '1')
  // },


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
