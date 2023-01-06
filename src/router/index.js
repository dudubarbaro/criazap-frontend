import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import About from "@/views/AboutView.vue";
import Chat from "@/views/ChatView.vue";
import Perfil from "@/views/PerfilView.vue";
import Config from "@/views/ConfigView.vue";
import Status from "@/views/StatusView.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/config",
    name: "Config",
    component: Config,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/status",
    name: "Status",
    component: Status,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
