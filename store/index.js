import Vue from "vue";
import Vuex from "vuex";

import todos from "./modules/todos";
import auth from "./modules/auth";
import tickets from "./modules/tickets";
import ticket from "./modules/ticket";
import register from "./modules/register";
import categories from "./modules/categories";
import cart from './modules/cart'
// Load Vuex
Vue.use(Vuex);

// Create store
const store = () =>{
  return new Vuex.Store({
    modules: {
      todos,
      auth,
      tickets,
      ticket,
      register,
      categories,
      cart
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
