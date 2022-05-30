import request from "../request";

export const getBanner = () =>
  request({
    url: "/banner",
    method: "GET",
  });

export const postBanner = () =>
  request({
    url: "/banner",
    method: "POST",
  });
