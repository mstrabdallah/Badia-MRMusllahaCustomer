import axios from "axios";


const state = {
  checkAuth: false,
  step: 1,
  stepSub: 1,
  is_active: 0,
  token: '',
  device: 'website',
  sessionId: '1234567',//this.$uuid.v5(navigator.userAgent, '65f9af5d-f23f-4065-ac85-da725569fdcd'),
  user: [],
  register: [],
  loading: false,
  checkUserStatus: false,
  loadingReg: true,
  errors: [],

};

const getters = {
  allAuth: state => state
};

const actions = {

  setAuth({ state }, data) {

    state.sessionId = data;
  },

  routerTo() {
    if (this.$i18n.locale === "en") {
      window.location.href = "/";
    } else {
      window.location.href = "/ar";
    }
  },

  Logout() {
    this.$cookies.remove('token');
    this.$cookies.remove('user');
    if (this.$i18n.locale === "ar") {
      window.location.href = "/";
    } else {
      window.location.href = "/en";
    }
  },



  // getAuth({ commit, state ,dispatch}) {

  //   if (!state.checkAuth) return false;
  //   const response = this.$axios.$get('auth').then((res) => {
  //     //this.LogOut()
  //     commit("user", response.data);
  //   }).catch(function (error) {
  //     if (error.response.status === 401) {
  //       dispatch('Logout');
  //     }
  //   });
  // },

  getToken({ app, state, dispatch }) {
    if (state.checkAuth === true) return false;
    const response = this.$axios.$get('/check_token').then((res) => {
      if (res.status === 200) {
        state.token = res.token;
        this.$cookies.set("token", res.token, {
          path: "/",
          maxAge: 365 * 24 * 60 * 60
        });
      }
      else {
      }

    }).catch(function (error) {
      // if (error.response.status === 401) {
      // }
    });
  },
  getMe({ state }) {

    //  state.loadingReg = true;
    const response = this.$axios.$get('/me').then((res) => {
      state.loadingReg = false;
      if (res.data === 401) {
        state.step = 1;

      } else {
        state.step = res.data.current_step + 1;
        state.user = res.data;
        state.is_online = res.data.is_online

        state.token = res.token;
        this.$cookies.set("user", res.data, { path: "/", maxAge: 365 * 24 * 60 * 60 });
      }
      }).catch(function (error) {

      });
  },
  Login({ app, state, dispatch }, arrayData) {

    var data = new FormData();
    data.append("phone_number", arrayData.phone_number.replace(/\s/g, ''));
    data.append("password", arrayData.password);
    state.loading = true;
    const response = this.$axios.$post('/me/login', data).then((res) => {
      state.loading = false;

      if (res.status === 200) {

        state.is_active = res.data.is_active;
        this.$cookies.set("iA", res.data.is_active, {
          path: "/",
          maxAge: 365 * 24 * 60 * 60,
        });
        // window.location.href = "/";
        dispatch('routerTo');
      }
      //state.token = res.token;

    }).catch(function (error) {
      // if (error.response.status === 401) {
      state.loading = false;

      // }
    });
  },

  // checkPhone({state},data) {
  //   state.loading=true;
  //   this.$axios.post("checkPhone", data).then((res) => {
  //       state.checkUserStatus = res.data.status;
  //        state.loading=false;
  //     })

  //     .catch((error) => {
  //          state.loading=false;
  //     });
  // },


}

const mutations = {

}
export default {
  state,
  getters,
  actions,
  mutations
};
