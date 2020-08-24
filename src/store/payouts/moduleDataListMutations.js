/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


export default {
<<<<<<< HEAD
  SET_REDEMPTIONS (state, redemptions){
    state.redemptions = redemptions
  },
  ADD_ITEM(state, item) {
    state.products.unshift(item)
=======
  SET_COMMISSIONS (state, commissions){
    state.commissions = commissions
>>>>>>> 4c57a7b97fcf2431afdae80b9d98f2316a835e56
  },
  SET_PRODUCTS(state, products) {
    state.products = products
  },
<<<<<<< HEAD
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_PRODUCT(state, product) {
      const productIndex = state.products.findIndex((p) => p.id == product.id)
      Object.assign(state.products[productIndex], product)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.products.findIndex((p) => p.id == itemId)
      state.products.splice(ItemIndex, 1)
  },
=======
>>>>>>> 4c57a7b97fcf2431afdae80b9d98f2316a835e56
}
