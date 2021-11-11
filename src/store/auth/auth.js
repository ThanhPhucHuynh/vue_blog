import axios from "axios";

const state = {
  user: null,
  post: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, form) {
    console.log(form);
    let formData = {
      email: form.email,
      password: form.password,
      name: form.name,
    };
    await axios.post("register", formData).then((response) => {
      if (response.status == 200) {
        console.log("tcong");
        dispatch("register", form);
      }
    });
  },

  async Login({ commit }, user) {
    let formData = {
      email: user.email,
      password: user.password,
    };
    console.log(formData);
    await axios.post("login", formData).then((res) => {
      if (res.status == 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.name);
        localStorage.setItem("id", res.data.id);
        commit("setUser", res.data);
      }
    });
  },

  async GetAuth({ commit }) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const id = localStorage.getItem("id");
    if (token) {
      commit("setUser", {
        token: token,
        username: username,
        id: id,
      });
    }else{
      commit("logout", null);
    }
    
  },

  // async CreatePost({ dispatch }, post) {
  //   await axios.post("post/", {
  //     "content": post.content,
  //     "like": "0",
  //     "uid": localStorage.getItem('id'),
  //     "shared": "0"
  //   },
  //   {
  //     headers: {
  //     "Accept": "application/json",
  //     "Content-Type": "application/json",
  //     "Authorization":  `Bearer ${localStorage.getItem('token')}`
  //   }});
  //   return await dispatch("GetPosts");
  // },

  // async GetPosts({ commit }) {
  //   let response = await Axios.get("post/",{
  //     headers: {
  //     "Accept": "application/json",
  //     "Content-Type": "application/json",
  //     "Authorization":  `Bearer ${localStorage.getItem('token')}`
  //   }});
  //   commit("setPosts", response.data);
  // },
  async LogOut({ commit }) {
    let user = null;
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  // setPosts(state, posts) {
  //   state.posts = posts;
  // },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
