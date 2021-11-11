import { createStore } from "vuex";
import auth from "./auth/auth";
import createPersistedState from "vuex-persistedstate";
// import Vue from 'vue';
// Vue.use(Vuex)
// export default new Vuex.Store({
//   modules: {
//     auth,
//   },
//   plugins: [createPersistedState()],
// });

const store = createStore({
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
export default store;
