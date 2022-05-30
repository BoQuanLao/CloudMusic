import axios from "axios";

// 创建 axios 实例
const ins = axios.create();

// 请求拦截器
ins.interceptors.request.use((config) => {
  console.log(config);
});

// 响应拦截器
ins.interceptors.response.use((response) => {
  console.log(response);
});

export default ins;
