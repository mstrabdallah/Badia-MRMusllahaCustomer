const state = {
  loading: true,
  data: [],
  cart:[],
};

const getters = {
  allservices: state => state
};

const actions = {

  async getservices({ state }, id) {
    // alert(id)
    state.loading = true;
    state.data = [];
    await this.$axios
      .get("/Service/" + id).then((res) => {
        state.data = res.data.data;
        state.loading = false;
      });
  },

  async addToCart({state}, dataObj){

    var dataObj = new FormData();
    dataObj.append("service_id", state.cart.id);


    state.loading = true;
    console.log(dataObj);
    await this.$axios.post('/cart/add'+ dataObj).then((res)=>{
      state.cart = res.data;
      state.loading = false;
    })
  }

}

const mutations = {

}
export default {
  state,
  getters,
  actions,
  mutations
};



