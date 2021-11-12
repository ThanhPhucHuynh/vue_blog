import { createApp } from "vue";
import App from "./App.vue";
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";
// import "ant-design-vue/dist/antd.css";

import {
  Modal,
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Input,
  Tag,
  Avatar,
  
} from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import axios from "axios";
import router from "./router";

import store from "./store";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://sleepy-brook-59433.herokuapp.com";

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});




const app = createApp(App);
app.config.productionTip = false;
app.use(router);
app.use(store)
app.use(Modal);

app.use(Avatar);
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(Input);
app.mount("#app");

// const app = createApp(App).use(router)

// app.use(MdButton)
// app.use(MdContent)
// app.use(MdTabs)
// app.mount('#app')
