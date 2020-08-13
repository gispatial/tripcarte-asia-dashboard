/*=========================================================================================
  File Name: moduleecommerce.js
  Description: ecommerce Module
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


import state from './moduleECommerceState.js'
import mutations from './moduleECommerceMutations.js'
import actions from './moduleECommerceActions.js'
import getters from './moduleECommerceGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
