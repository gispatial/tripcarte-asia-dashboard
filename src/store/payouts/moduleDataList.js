/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


import state from './moduleDataListState.js'
import mutations from './moduleDataListMutations.js'
import actions from './moduleDataListActions.js'
import getters from './moduleDataListGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
