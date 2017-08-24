import Vue from "vue";
import Component from "vue-class-component"
import CalcProperty from "./calc_energy.vue";
import TableCalc from "./tableCalcComp.vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    quantityLamp: '',
	hrYear: '',
	costEnergy: ''
  },
  mutations: {
      storeInputs (state, obj) {
        state.quantityLamp = obj.quantityLamp;
		state.hrYear = obj.hrYear;
        console.log("Новое значение " + state.quantityLamp);
        //...
    }
  },
  getters: {
      quantity (state) {
          return state.quantityLamp;
      }
  },
  getters: {
      hrYear (state) {
          return state.hrYear;
      }
  }
})

new Vue({
   el: ".test-container",
   store,
   components: {
       "calcproperty": CalcProperty,
       "tablecalc-component": TableCalc,
   }
});

