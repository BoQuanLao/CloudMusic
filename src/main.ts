import { createApp } from "vue";
import App from "./App.vue";
import route from "./router";
import store from "@/store";
import 'normalize.css'
// 创建 app 实例
const app = createApp(App);
// 使用 插件
app.use(route);
app.use(store);

// 挂载节点
app.mount("#app");
