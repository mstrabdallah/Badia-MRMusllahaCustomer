
const state = {
  loading: true,
  data: [],
  subCat:[]


};

const getters = {
  AllCategories: state => state,

};

const actions = {

  async getCategories({ state }) {
    await this.$axios.get("/Category").then((res) => {
      state.data = res.data;
      console.log(state.data);
      // state.data = res.data.data;
      // state.loading = false;
    });
  },

  async getSubCategories({ state }, id) {
    await this.$axios.get("/Category?parent="+id).then((res) => {
      state.subCat = res.data.data;
      console.log(state.subCat);
      // state.data = res.data.data;
      // state.loading = false;
    });
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

