import Vue from "vue";
import Component from "vue-class-component";
import CalcProperty from "./calc_energy.vue";
import TableCalc from "./tableCalcComp.vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    quantityLamp: "",
	hrYear: "",
	costEnergy: "",
	lifeTimeFilam: "1000.00",
	lifeTimeLum: "8000.00",
	lifeTimeSvet: "20000.00",
	consumedEnergyArray: [0,0,0],
	costLampFilam: "20.00",
	costLampLum: "90.00",
	costLampSvet: "120.00",
	selectedPowerFilam: 40,
	optionsFilam: [
		{ text: '40', value: 40 },
		{ text: '60', value: 60 },
		{ text: '75', value: 75 },
		{ text: '100', value: 100 }
	],
	selectedPowerLum: 12,
	optionsLum: [
		{ text: '12', value: 12 },
		{ text: '15', value: 15 },
		{ text: '18', value: 18 },
		{ text: '20', value: 20 }
	],
	selectedPowerSvet: 8,
	optionsSvet: [
		{ text: '8', value: 8 },
		{ text: '10', value: 10 },
		{ text: '12', value: 12 },
		{ text: '15', value: 15 }
	],
  },
  mutations: {  
	consumedEnergyArray (state, value) {
		state.consumedEnergyArray = value;
	},
	quantityLamp (state, value) {
		state.quantityLamp = value;
	},
	hrYear (state, value) {
		state.hrYear = value;
	},
	lifeTimeFilam (state, value) {
		state.lifeTimeFilam = value;
	},
	costEnergy (state, value) {
		state.costEnergy = value;
	},
	consumedEnergyYear (state, value) {
		state.consumedEnergyYear = value;
	},
	costLampFilam (state, value) {
		state.costLampFilam = value;
	},
	costLampLum (state, value) {
		state.costLampLum = value;
	},
	costLampSvet (state, value) {
		state.costLampSvet = value;
	},
	lifeTimeLum (state, value) {
		state.lifeTimeLum = value;
	},
	lifeTimeSvet (state, value) {
		state.lifeTimeSvet = value;
	},
	selectedPowerFilam (state, value) {
		state.selectedPowerFilam = value;
	},
	optionsFilam (state, value) {
		state.optionsFilam = value;
	},
	selectedPowerLum (state, value) {
		state.selectedPowerLum = value;
	},
	optionsLum (state, value) {
		state.optionsLum = value;
	},
	selectedPowerSvet (state, value) {
		state.selectedPowerSvet = value;
	},
	optionsSvet (state, value) {
		state.optionsSvet = value;
	},
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

	consumedEnergyArray (state) {
        return state.consumedEnergyArray;
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
});

new Vue({
   el: ".test-container",
   store,
   components: {
       "calcproperty": CalcProperty,
       "tablecalc-component": TableCalc,
   }
});
