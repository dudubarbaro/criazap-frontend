import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(createPinia());
import "./plugins/axios";