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
	costEnergy: '',
	lifeTimeFilam: '1000.00',
	lifeTimeLum: '8000.00',
	lifeTimeSvet: '20000.00',
	powerYear: [0,0,0],
	costLampFilam: '20.00',
	costLampLum: '90.00',
	costLampSvet: '120.00',
  },
  mutations: {
      storeInputs (state, obj) {
        state.quantityLamp = obj.quantityLamp;
		state.hrYear = obj.hrYear;
		state.lifeTimeFilam = obj.lifeTimeFilam;
		state.lifeTimeLum = obj.lifeTimeLum;
		state.lifeTimeSvet = obj.lifeTimeSvet;
		state.powerYear = obj.powerYear;
		state.costEnergy = obj.costEnergy;
		state.costLampFilam = obj.costLampFilam;
		state.costLampLum = obj.costLampLum;
		state.costLampSvet = obj.costLampSvet;	
        console.log("py " + obj.powerYear);
        console.log("Новое значение " + state.quantityLamp);
        //...
    }
  },
  getters: {
    quantityLamp (state) {
        return state.quantityLamp;
    },
	  
    hrYear (state) {
        return state.hrYear;
    },
	  
	lifeTimeFilam (state) {
        return state.lifeTimeFilam;
    },
	  
	lifeTimeLum (state) {
        return state.lifeTimeLum;
    },
	  
	lifeTimeSvet (state) {
        return state.lifeTimeSvet;
    },
	  
	powerYear (state) {
        return state.powerYear;
    },
	
	costEnergy (state) {
        return state.costEnergy;
    },
	
	costLampFilam (state) {
        return state.costLampFilam;
    },
	
	costLampLum (state) {
        return state.costLampLum;
    },
	
	costLampSvet (state) {
        return state.costLampSvet;
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

