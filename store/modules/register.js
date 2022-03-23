const state = {
  step: 1,
  token: "",
  device: "website",
  sessionId: "1234567",
  user: [],
  register: [],
  loading: false,
};

const getters = {
  allAuth: (state) => state,
};

const actions = {
  register({ state }, dat) {
    let data = new FormData();
    if (state.step === 2) data.append("vertification_code", dat);
    else state.register = arrayData;

    data.append("name", state.register.name);
    data.append("phone", state.register.phone.replace(/\s/g, ""));
    data.append("email", state.register.email);
    data.append("referral", state.register.referral);
    data.append("password", state.register.password);
    data.append("password_confirmation", state.register.password);
    state.loading = true;
    this.$axios
      .post("/Register/step1", data)
      .then((res) => {
        state.loading = false;
        if (res.status === 200) {
          if (state.step === 1) state.step = 2;
          else state.step = 1;
        }
      })
      .catch((error) => {
        state.loading = false;
      });
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
