import { createApp } from "vue";
import App from "./App.vue";
import route from "./router";
import store from "@/store";

const app = createApp(App);

app.use(route);
app.use(store);

app.mount("#app");
