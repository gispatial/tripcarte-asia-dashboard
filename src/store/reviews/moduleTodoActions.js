/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Author: Netquest
  Author URL: http://demo.tripcarte.asia/
==========================================================================================*/

import axios from "@/axios.js"
import { resolve } from "core-js/fn/promise"

export default {

    getReviews({commit}) {
      return new Promise((resolve, reject) => {
        axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v1/reviews",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
          .then(res => {
            commit('SET_REVIEWS', res.data)
            resolve(res)
          })
          .catch((error) => { reject(error) })
      })
    },

    setTodoSearchQuery({ commit }, query){
        commit('SET_TODO_SEARCH_QUERY', query)
    },
    fetchTasks({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.get("/api/apps/reviews/tasks", { params: {filter: payload.filter} })
          .then((response) => {
            commit('SET_TASKS', response.data)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    fetchTags({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get("/api/apps/reviews/tags")
          .then((response) => {
            commit('SET_TAGS', response.data)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    addTask({ commit }, task) {
      return new Promise((resolve, reject) => {
        axios.post("/api/apps/reviews/tasks/", {task: task})
          .then((response) => {
            commit('ADD_TASK', Object.assign(task, {id: response.data.id}))
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    updateTask({ commit }, task) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/apps/reviews/task/${task.id}`, {task: task})
          .then((response) => {
            commit('UPDATE_TASK', response.data)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    }

}
