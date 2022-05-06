

const state = {
  errors: null,
  msg: null,
  api: '',
  type:'error'
}

const getters = {
  allMsg: state => state
};

const actions = {

  setMsg({state}, data) {
    state.msg = data.msg;
    state.errors = data.errors;
    state.api = data.api
    state.type=data.type
  },
  setToast({state},data){
    this.$toast.success({
      title:this.$i18n.t(data.title),
      message:this.$i18n.t(data.des),
      position: 'top center',
      showMethod:'zoomInDown',
      hideMethod:'zoomOutUp',
      timeOut:3000
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
