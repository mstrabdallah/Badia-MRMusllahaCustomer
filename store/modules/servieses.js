const state = {
  loading: true,
  data: [],

};

const getters = {
  allservices: state => state
};

const actions = {

  async getservices({ state }, id) {
    alert(id)
    state.loading = true;
    state.data = [];
    await this.$axios
      .get("/Service/" + id).then((res) => {
        state.data = res.data.data;
        state.loading = false;
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




// const state = {
//   ServiceData:[]
// };

// const getters = {
//   Service: state => state,

//   // AllServiceDate: (state) => state.ServiceDate,
//   // sales: (state) => state.products.filter((product) => product.onSale === true),
// };

// const actions = {

//   async getServices({ state }, id) {
//     await this.$axios.get("/Service/"+id).then((res) => {
//       state.ServiceData = res.data;
//       console.log(state.ServiceData);
//       // state.data = res.data.data;
//       // state.loading = false;
//     });
//   },

// };

// const mutations = {
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };
