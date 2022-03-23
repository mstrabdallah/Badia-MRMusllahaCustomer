
const state = {
  loading:true,
  data: [],

};

const getters = {
  allProudcts: state => state,
};

const actions = {

  async getProducts({state}) {
   await this.$axios.get("/products").then((res) => {
    state.data = res.data;
    console.log(state.data);

      // state.data = res.data.data;
      // state.loading = false;
    });
  },
}

const mutations ={

}
export default {
  state,
  getters,
  actions,
  mutations
};



// const state = {
//   categories: [
//     {
//       id: 1,
//       name: "Shoes",
//       image:
//         "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       id: 2,
//       name: "Handbags",
//       image:
//         "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       id: 3,
//       name: "Perfumes",
//       image:
//         "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       id: 4,
//       name: "Cosmetics",
//       image:
//         "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//       id: 5,
//       name: "Food",
//       image:
//         "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//   ],
// };
// const getters = {
//   categories: (state) => state.categories,
// };

// const actions = {};

// const mutations = {};

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };
