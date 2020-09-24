/*=========================================================================================
  File Name: moduleAuthGetters.js
  Description: Auth Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


export default {

  isLoggedIn: state => {
    return !!state.token; // code to check if authenticated
  },
  authStatus: state => {
    return state.status; // code to check status
  }

}
