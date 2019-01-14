import axios from 'axios'

import appConfig from './config'

class RequestError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;
  }
}

function createRequest(projectBaseUrl = "", config = {}) {
  const instance = axios.create({
    ...config,
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      // const { channelId, platform } = getSpread();
      // config.headers = {
      //   ...config.headers,
      //   cId: channelId,
      //   pId: platform,
      //   vId: appConfig.appVersion,
      //   eId: bowser.name.toLocaleLowerCase() + "_" + bowser.version
      // };

      // // 平台，渠道号等参数传递
      // let spread = getSpread();
      if (config.method === "get") {
        config.params = Object.assign({}, spread, config.params);
      }
      if (
        config.method === "post" &&
        (!config.headers["Content-Type"] ||
          config.headers["Content-Type"].toLocaleLowerCase() ===
          "application/json;charset=utf-8")
      ) {
        config.data = Object.assign({}, spread, config.data);
      }
      config.url = setupRequestUrl(config, projectBaseUrl);
      return config;
    },
    error => {
      console.log(error);
      return Promise.reject(error)
    }
  );
  instance.interceptors.request.use(
    response => {
      let res = response.data;
      if (typeof res === "string") {
        try {
          res = JSON.parse(res);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      if (!res.success) {
        return Promise.reject(
          new RequestError(
            response.data.message,
            response.data.errorCode,
            response.data.data
          )
        );
      }
      return res;
    },
    error => {
      if (!error.response) {
        return Promise.reject(new RequestError("网络错误", 600));
      }
      return Promise.reject(error);
    }
  );
  return instance;
}

export default createRequest()
function setupRequestUrl(config, projectBaseUrl) {
  // if (config.noVersion) {
  //   return `${projectBaseUrl}${config.url}`;
  // }
  // if (typeof config.prefix === "string") {
  //   return `${config.prefix}${config.url}`;
  // }
  // return `${projectBaseUrl}${API_URL}/${config.version ||
  //   appConfig.apiVersion}${config.url}`;
  return config.url
}