import 'axios';
const state = {
  loading: true,
  userData: [],

}

const getters = {
  userData: (state) => state,
}

const actions = {

  changeMenuHeader({ state }, data) {
    state.menuHeader = data
},


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


}

const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations,
}
