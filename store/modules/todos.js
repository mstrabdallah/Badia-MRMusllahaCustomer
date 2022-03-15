import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(url);
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(url, { title, completed: false });
    commit("newTodo", response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`${url}/${id}`);
    commit("removeTodo", id);
  },

  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(`${url}/?_limit=${limit}`);
    commit("setTodos", response.data);
  },

  // This won't work as you are reducing the inital todos array. If you slect 5 you won't
  // be able to go above that value
  filterTodos2({ commit, state }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = state.todos.filter((todo, i) => i < limit);
    commit("setTodos", response);
  },

  async updateTodo({ commit }, updateTodo) {
    const response = await axios.put(`${url}/${updateTodo.id}`, updateTodo);

    commit("updateTodo", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updateTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updateTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
