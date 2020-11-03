import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueChatScroll from "vue-chat-scroll";
import Home from "./views/Home";
import Chat from "./components/Chat";

Vue.use(VueChatScroll);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if(to.params.name){
        next()
      }else{
        next({name:'Home'})
      }
    }
  },
];
const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  router,
  el:"#app",
  render: h => h(App)
});
