
const state = {
  loading:true,
  data: [],
  
};

const getters = {
  allTickets: state => state,
};

const actions = {

  async getTicket({state}) {
   await this.$axios.get("/Ticket").then((res) => {
      state.data = res.data.data;
      state.loading = false;
    });
  },
}

const mutations ={
  
}
export default {
  state,
  getters,
  actions,
  mutations
};
