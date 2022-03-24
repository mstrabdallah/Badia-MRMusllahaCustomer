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
  // allAuth: (state) => state,
};

const actions = {
  register({ state }, dat) {

    console.log(state.register);
    let data = new FormData();

    if (state.step === 2)
    data.append("vertification_code", dat);
    else
    state.register = dat;

    data.append("name", state.register.name);
    data.append("phone", state.register.phone);
    data.append("email", state.register.email);
    data.append("referral", state.register.referral);
    data.append("password", state.register.password);
    data.append("password_confirmation", state.register.password);
    state.loading = true;


     this.$axios
       .post("/register", data)
       .then((res) => {
         state.loading = false;
         console.log(res)
         if (res.status === 200) {
          console.log('ee',res)
          if (state.step === 1) state.step = 2;

           else{
            console.log('eee',res)
            // this.$cookies.set("iA", res.token, {path: "/",maxAge: 365 * 24 * 60 * 60});
            // if (this.$i18n.locale === "ar") {
            //   window.location.href = "/";
            // } else {
            //   window.location.href = "/en";
            // }
           }

         }else{
           alert('error')
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
