/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/

import axios from "@/axios.js"

export default {

  getCommissions({commit}) {
      return new Promise((resolve, reject) => {
        axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/commissions",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
          .then(res => {
            commit('SET_PAYOUTS', res.data)
            resolve(res)
          })
          .catch((error) => { reject(error) })
      })
    },

  addItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/commissions",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then((response) => {
          commit('ADD_PAYOUTS', Object.assign(item, {id: response.data.id}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataListItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/commissions",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then((response) => {
          commit('SET_PAYOUTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  getQR({commit}, barcode) {
    return new Promise((resolve, reject) => {
      axios.get("/api/data-list/products/${barcode}",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then(res => {
          commit('SET_QR', res.data)
          resolve(res)
        })
        .catch((error) => { reject(error) })
    })
  },
  updateItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/commissions",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then((response) => {
          commit('UPDATE_PAYOUTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/commissions",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  mounted() {
    this.$store.dispatch("payouts/getCommissions")
    this.gridApi = this.gridOptions.api
  }
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
}
