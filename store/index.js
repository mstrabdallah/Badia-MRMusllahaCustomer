import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import register from "./modules/register";
import categories from "./modules/categories";
import cart from './modules/cart'
import carts from './modules/carts'
import servieses from './modules/servieses'
// Load Vuex
Vue.use(Vuex);

// Create store
const store = () =>{
  return new Vuex.Store({
    modules: {
      auth,
      register,
      categories,
      cart,
      carts,
      servieses
    },
});
}

export default store ;
// () => new Vuex.Store({
//   modules: {
//     todos,
//     auth,
//     tickets,
//     ticket
//   }
// });
