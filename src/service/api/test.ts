import request from "../request";

export default () =>
  request({
    url: "/banner",
    method: "GET",
  });
