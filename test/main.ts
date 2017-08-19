import Vue from "vue";
import Component from "vue-class-component"
import CalcProperty from "./calc_energy.vue";
import TableCalc from "./tableCalc.vue";
import Vuex from "vuex";

Vue.use(Vuex);

new Vue({
   el: ".test-container",
   //store,
   components: {
       "calcproperty": CalcProperty,
       "tablecalc-component": TableCalc
   }
});

