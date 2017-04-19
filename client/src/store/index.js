import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const initialState = {
      houses : [],
      newHouse : {
       title : '',
       price : '',
       description : '',
       owner : '',
       address : '',
       image : '',
       latitude : '',
       longitude : ''
     },
     formEditHouse: {
      title : '',
      price : '',
      description : '',
      owner : '',
      address : '',
      image : '',
      latitude : '',
      longitude : ''
    }
   }

export default new Vuex.Store({
 state: {...initialState},
 mutations: {
   POST_HOUSE(state, payload){
     state.houses.push(payload)
     state.newHouse = {
      title : '',
      price : '',
      description : '',
      owner : '',
      address : '',
      image : '',
      latitude : '',
      longitude : ''
    }
   },
   GET_HOUSE(state, payload){
     state.houses = payload
   },
   SET_EDIT_FORM(state, payload){
     state.formEditHouse = payload
   },
   EDIT_HOUSE(state, payload){
     let houses = state.houses
     houses.splice(houses.indexOf(payload._id), 1, payload)
   },
   REMOVE_HOUSE(state, payload){
      let houses = state.houses
      let idx = houses.findIndex((house) => house._id == payload)
      console.log('ini index payload ', idx);
      houses.splice(idx, 1)
   }
 },
 actions: {
   addHouse({commit, state}){
     axios.post('http://localhost:3000/api/house', state.newHouse)
     .then(function (response) {
       commit('POST_HOUSE', response.data)
     })
     .catch(function(err) {
       console.log(err);
     })
   },
   getHouse({commit}) {
     axios.get('http://localhost:3000/api/house')
     .then(function(response) {
       commit('GET_HOUSE', response.data)
     })
     .catch(function(err) {
       console.log(err);
     })
   },
   getEdited({commit}, payload) {
     axios.get(`http://localhost:3000/api/house/${payload}`)
    .then(function(response) {
      commit('SET_EDIT_FORM', response.data)
    })
    .catch(function(err) {
      console.log(err);
    })
   },
   editHouse({commit, state}, payload){
     console.log(payload);
     axios.put(`http://localhost:3000/api/house/${payload}`, state.formEditHouse)
    .then(function(response) {
      commit('EDIT_HOUSE', response.data)
      window.location.href = ('http://localhost:8080/#/home')
    })
    .catch(function(err) {
      console.log(err);
    })
  },
  removeHouse({commit, state}, payload){
    console.log(payload);
    axios.delete(`http://localhost:3000/api/house/${payload}`)
    .then(function(response) {
      console.log(response);
      commit('REMOVE_TODO', payload)
    })
    .catch ((err) => {
      console.log(err);
    })
   }
 },
 getters :{
  houses: state => state.houses,
  newHouse : state => state.newHouse,
  formEditHouse: state => state.formEditHouse
 }
})
