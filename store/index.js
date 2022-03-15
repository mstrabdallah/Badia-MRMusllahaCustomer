import Vue from "vue";
import Vuex from "vuex";

import todos from "./modules/todos";
import auth from "./modules/auth";
import tickets from "./modules/tickets";
import ticket from "./modules/ticket";

// Load Vuex
Vue.use(Vuex);

// Create store
export default () => new Vuex.Store({
  modules: {
    todos,
    auth,
    tickets,
    ticket
  }
});