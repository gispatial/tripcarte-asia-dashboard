import axios from "../../../axios/index.js"
import store from "../../../../store/store.js"
import Vapi from "vuex-rest-api"

/*
// Token Refresh
let isAlreadyFetchingAccessToken = true
let subscribers = []

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}
*/

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
};

const bodyParameters = {
  key: "value"
};

export default {
  /*
  init() {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch("auth/fetchAccessToken")
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = 'Bearer ' + access_token
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },
  */
  login(uname, pwd) {
    return axios.post("https://partners.tripcarte.asia/wp-json/jwt-auth/v1/token", {username: uname, password: pwd})
  },
  refreshtoken() {
    return axios.post('https://partners.tripcarte.asia/wp-json/jwt-auth/v1/token/validate', bodyParameters, config)
  }
  /*
  registerUser(name, email, pwd) {
    return axios.post("/api/auth/register", {displayName: name, email: email, password: pwd})
  },
  refreshToken() {
    return axios.post("/api/auth/refresh-token", {accessToken: localStorage.getItem("accessToKen")})
  }
  */
}
/*
var myHeaders = new Headers();
myHeaders.append("underwaterworldadmin", "abcd1234!");
myHeaders.append("Authorization", "Bearer {{token}}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/my/reviews", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */
