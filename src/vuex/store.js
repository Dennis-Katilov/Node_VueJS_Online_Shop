//import axios from "axios";
import './actions/actions'
import './getters/getters'
import './mutations/mutations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products:[],
        cart:[],
    },
    mutations: {
        // SET_PRODUCTS_TO_STATE: (state, products) => {
        //     state.products = products
        // },
        // SET_CART: (state, product) => {
        //     if (state.cart.length){
        //         let isItemExist = false;
        //         state.cart.map(function (item){
        //             if (item.article === product.article){
        //                 isItemExist = true
        //                 item.quantity++
        //             }
        //         })
        //             if (!isItemExist){
        //                 state.cart.push(product)
        //             }
        //     }else{
        //         state.cart.push(product)
        //     }
        // },
        // REMOVE_FROM_CART: (state, index) => {
        //     state.cart.splice(index,1)
        // },
        // INCREASE_QUANTITY: (state, index) => {
        //     state.cart[index].quantity++
        // },
        // DECREASE_QUANTITY: (state, index) => {
        //     if (state.cart[index].quantity > 1){
        //         state.cart[index].quantity--
        //     }
        // },
    },
    actions: {
      // GET_PRODUCTS_FROM_API({commit}){
      //     return axios('http://localhost:3000/products', {
      //       method: "GET"
      //     })
      //         .then((products) => {
      //         commit('SET_PRODUCTS_TO_STATE', products.data);
      //             return products;
      //         })
      // },
      // ADD_TO_CART({commit}, product){
      //     commit('SET_CART', product);
      // },
      // DELETE_FROM_CART({commit}, index){
      //     commit('REMOVE_FROM_CART', index);
      //   },
      // INCREASE_QUANTITY({commit}, index){
      //     commit('INCREASE_QUANTITY', index);
      // },
      // DECREASE_QUANTITY({commit}, index){
      //     commit('DECREASE_QUANTITY', index);
      // }
    },
    getters: {
        // PRODUCTS(state){
        //     return state.products;
        // },
        // CART(state){
        //     return state.cart;
        // }
    }
})
export default store


