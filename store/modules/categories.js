
const state = {
  loading: true,
  data: [],
  subCat:[]

};

const getters = {

  Categories: state => state,

};

const actions = {
  async getCategories({ state }) {
    await this.$axios.get('/Category').then((res) => {
      state.data = res.data
      console.log(state.data)
      // state.data = res.data.data;
      // state.loading = false;
    })
  },

  async getSubCategories({ state }, id) {
    await this.$axios.get('/Category?parent=' + id).then((res) => {
      state.date = res.data
      console.log(state.date)
      // state.data = res.data.data;
      // state.loading = false;
    })
  },
}

const mutations = {

}
export default {
  state,
  getters,
  actions,
  mutations
};

