const state = {
  cart: [],
};
const getters = {
  addCart: state.cart
};

const actions = {
  addToCart({ commit }, product) {
    commit("addToCart", product);
  },
  DecreaseItemCount({ commit }, index) {
    commit("DecreaseItemCount", index);
  },
  RemoveCartItem({ commit }, index) {
    commit("RemoveCartItem", index);
  },
  IncreaseItemCount({ commit }, index) {
    commit("IncreaseItemCount", index);
  },
  ClearCart({ commit }) {
    commit("ClearCart");
  },
  LoadCart({ commit }) {
    commit("LoadCart");
  },
};

const mutations = {
  LoadCart(state) {
    let cart = localStorage.getItem("myCart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },
  addToCart: (state, product) => {
     this.$axios.post("/cart/add", product).then((res)=>{
      console.log(res);
     })
    let itemFound = state.cart.find((p) => p.product.id === product.id);
    if (!itemFound) {
      state.cart.push({ product, quantity: 1 });
    }
    if (itemFound) {
      itemFound.quantity += 1;
    }
    //Update local storage
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  },
  DecreaseItemCount(state, index) {
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity == 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1);
    //Update local storage
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  },
  IncreaseItemCount(state, index) {
    let item = state.cart[index];
    item.quantity += 1;
    //Update local storage
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  },
  ClearCart(state) {
    state.cart = [];
    //Update local storage
    localStorage.removeItem("myCart");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
