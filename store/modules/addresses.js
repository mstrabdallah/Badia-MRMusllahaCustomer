import 'axios';
const state = {
  loading: true,
  data: [],
  address: [],

}

const getters = {
  AllAddresses: (state) => state,
}

const actions = {
  async getAddress({ state }) {
    // alert(id)
    state.loading = true
    state.data = []
    await this.$axios.get('/me/getAddress' ).then((res) => {
      state.data = res.data

      state.loading = false
    })
  },

  async addAddress({ state , dispatch }, Obj) {

    // console.log(Obj);
    var is_Default =  Obj.checkbox;
    if(is_Default == true){
      is_Default =1
    }else{
      is_Default =0
    }
    var data = new FormData()

    data.append('city_id', '1')
    data.append('lat', "30.33535")
    data.append('lng', "30.33535")

    data.append('street', Obj.street)
    data.append('area', Obj.area)
    data.append('building_no', Obj.building_no)
    data.append('apartment_no', Obj.apartment_no)
    data.append('address_line', Obj.address_line)
    data.append('postal_code', Obj.postal_code)
    data.append('notes', Obj.notes)

    data.append('is_default', is_Default)

    state.loading = true
     this.$axios.post('/me/addAddress', data).then((res) => {
       state.cart = res.data
       if (res.data.status === 200) {
         alert(res.data.msg)
       } else {
         alert(res.data.msg)
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
