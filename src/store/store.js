/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Tripcarte.Asia
  Staging URL: http://tripcarte.gispatial.tech/api
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

// import moduleTodo from './reviews/moduleTodo.js'
// import moduleCalendar from './calendar/moduleCalendar.js'
// import moduleChat from './chat/moduleChat.js'
// import moduleEmail from './email/moduleEmail.js'
import moduleAuth from './auth/moduleAuth.js'
import moduleECommerce from './eCommerce/moduleECommerce.js'
//import moduleCommission from './commission/moduleCommission.js'


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        // todo: moduleTodo,
        // calendar: moduleCalendar,
        // chat: moduleChat,
        // email: moduleEmail,
        auth: moduleAuth,
        eCommerce: moduleECommerce,
        //commission: moduleCommission
    },
    strict: process.env.NODE_ENV !== 'production'
})
