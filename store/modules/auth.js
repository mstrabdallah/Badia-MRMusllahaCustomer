import axios from "axios";


const state = {
  checkAuth: false,
  token: '',
  user: [],
  loading:false,
  checkUserStatus:false
};

const getters = {

};

const actions = {

  Logout() {
    this.$cookies.remove('token');
    this.$cookies.remove('user');
    if (this.$i18n.locale === "ar") {
      window.location.href = "/";
    } else {
      window.location.href = "/en";
    }
  },


  getAuth({ commit, state ,dispatch}) {
    
    if (!state.checkAuth) return false;
    const response = this.$axios.$get('auth').then((res) => {
      //this.LogOut()
      commit("user", response.data);
    }).catch(function (error) {
      if (error.response.status === 401) {
        dispatch('Logout');
      }
    });
  },

  checkPhone({state},data) {
    state.loading=true;
    this.$axios.post("checkPhone", data).then((res) => {
        state.checkUserStatus = res.data.status;
         state.loading=false;
      })
      
      .catch((error) => {
           state.loading=false;
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
