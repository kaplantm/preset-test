import axios from "axios";

export const getUrlPathParams = (url: string, params: { [key: string]: string }) =>
  Object.keys(params).reduce((acc, key) => {
    const regex = new RegExp(`:${key}`, "g");
    return acc.replace(regex, params[key]);
  }, url);

export const fetcher = (url: string, params: { [key: string]: string }) =>
  axios.get(getUrlPathParams(url, params), { params }).then((res) => res.data);
