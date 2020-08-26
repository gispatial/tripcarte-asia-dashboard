/*=========================================================================================
  File Name: moduleCommissionActions.js
  Description: Commission Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Author: Netquest
  Author URL: http://demo.tripcarte.asia/
==========================================================================================*/

import axios from "@/axios.js"
import { resolve } from "core-js/fn/promise"

export default {

  getCommissions({commit}) {
    return new Promise((resolve, reject) => {
      axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/commissions",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then(res => {
          commit('SET_COMMISSIONS', res.data)
          resolve(res)
        })
        .catch((error) => { reject(error) })
    })
  }
}
