
const state = {
  loading: true,
  data: [],

};

const getters = {
  allTicket: state => state
};

const actions = {

  async getTicket({ state }, id) {
    state.loading = true;
    state.data = [];
    await this.$axios
      .get("/Ticket/show/" + id).then((res) => {
        state.data = res.data.data;
        state.loading = false;
      });
  },

  async closeTicket({ state, dispatch }, id) {
    var data = new FormData();
    data.append("ticket_id", id);
    await this.$axios.post("Ticket/close", data).then((res) => {
      state.data.is_closed = true
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
