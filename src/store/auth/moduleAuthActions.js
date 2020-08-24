/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js"


import router from '@/router'

export default {
	logout() {
	},	
    loginJWT({ commit }, payload) {
      return new Promise((resolve,reject) => {
        jwt.login(payload.userDetails.username, payload.userDetails.password)
          .then(response => {

            // If there's user data in response
            if(response.status == 200) {
              // Navigate User to homepage
              router.push(router.currentRoute.query.to || '/')

              // Set accessToken
              localStorage.setItem("accessToken", response.data["token"])

              // Update user details
              commit('UPDATE_USER_INFO', response.data, {root: true})

              // Set bearer token in axios
              //commit("SET_BEARER", response.data.accessToken)

              resolve(response)
            }else {
              reject({message: "Wrong Username or Password"})
            }

          })
          .catch(error => { reject({message: "Username or password is not valid"}) })
      })
    },
    registerUserJWT({ commit }, payload) {

      const { displayName, email, password, confirmPassword } = payload.userDetails

      return new Promise((resolve,reject) => {

        // Check confirm password
        if(password !== confirmPassword) {
          reject({message: "Password doesn't match. Please try again."})
        }

        jwt.registerUser(displayName, email, password)
          .then(response => {
            // Redirect User
            router.push(router.currentRoute.query.to || '/')

            // Update data in localStorage
            localStorage.setItem("accessToken", response.data.accessToken)
            commit('UPDATE_USER_INFO', response.data.userData, {root: true})

            resolve(response)
          })
          .catch(error => { reject(error) })
      })
    },
    fetchAccessToken() {
      return new Promise((resolve) => {
        jwt.refreshToken().then(response => { resolve(response) })
      })
    }
}
