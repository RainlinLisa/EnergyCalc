import Vue from "vue";
import Component from "vue-class-component";
import TableCalc from "./tableCalcComp.vue";    

@Component({
	props: {},
   components: {
       "tablecalc-component": TableCalc,
   }})
export default class CalcProperty extends Vue { 
	private year = ['1 год', '3 года', '5 лет'];		
	private powerLampArray = [];
	private consumedEnergyArray = [];
	private primaryInvestArray = [];
    	
	get computedAll () {
		return (this.costEnergy && this.hrYear && this.quantityLamp);
	}
	get selectedPower () {
        return [this.selectedPowerFilam, this.selectedPowerLum, this.selectedPowerSvet];
    }
	get costLamp () {
        return [this.costLampFilam, this.costLampLum, this.costLampSvet];
    }
	
	// Суммарная мощность ламп, Вт
	get sumPowerLamp () {
		this.powerLampArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.selectedPower.length; i++) {
				this.powerLampArray[i] = (Math.round(this.selectedPower[i] * this.quantityLamp));
			}
		}
		return this.powerLampArray;
    }
	
	//Потребляемая электроэнергия за год, кВт*час
	get consumedEnergyYear () {
		this.consumedEnergyArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.selectedPower.length; i++) {
				this.consumedEnergyArray[i] = (Math.round((this.selectedPower[i] * this.quantityLamp * +this.hrYear)/1000));
			}
		}
		return this.consumedEnergyArray;
    }
	
	//Первоначальные инвестиции на покупку ламп, руб.
	get primaryInvest () {
		this.primaryInvestArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.costLamp.length; i++) {
				this.primaryInvestArray[i] = ((this.costLamp[i] * this.quantityLamp).toFixed(2));
			}
		}
		return this.primaryInvestArray;
    }
	
	get consumedEnergyArray(): string {
		return this.$store.state.consumedEnergyArray;
	}
	set consumedEnergyArray(value:string) {
        this.$store.commit('consumedEnergyArray', value);
    }
	get quantityLamp(): string {
		return this.$store.state.quantityLamp;
	}
	set quantityLamp(value:string) {
        this.$store.commit('quantityLamp', value);
	}
	get hrYear(): string {
		return this.$store.state.hrYear;
	}
	set hrYear(value:string) {
        this.$store.commit('hrYear', value);
	}	
	get costEnergy(): string {
		return this.$store.state.costEnergy;
	}
	set costEnergy(value:string) {
        this.$store.commit('costEnergy', value);
    }	
	get costLampFilam(): string {
		return this.$store.state.costLampFilam;
	}
	set costLampFilam(value:string) {
        this.$store.commit('costLampFilam', value);
    }	
	get costLampLum(): string {
		return this.$store.state.costLampLum;
	}
	set costLampLum(value:string) {
        this.$store.commit('costLampLum', value);
    }	
	get costLampSvet(): string {
		return this.$store.state.costLampSvet;
	}
	set costLampSvet(value:string) {
        this.$store.commit('costLampSvet', value);
    }
	get lifeTimeFilam(): string {
		return this.$store.state.lifeTimeFilam;
	}
	set lifeTimeFilam(value:string) {
        this.$store.commit('lifeTimeFilam', value);
    }
	get lifeTimeLum(): string {
		return this.$store.state.lifeTimeLum;
	}
	set lifeTimeLum(value:string) {
        this.$store.commit('lifeTimeLum', value);
    }	
	get lifeTimeSvet(): string {
		return this.$store.state.lifeTimeSvet;
	}
	set lifeTimeSvet(value:string) {
        this.$store.commit('lifeTimeSvet', value);
    }
	get optionsFilam(): string {
		return this.$store.state.optionsFilam;
	}
	set optionsFilam(value:string) {
        this.$store.commit('optionsFilam', value);
    }
	get selectedPowerFilam(): string {
		return this.$store.state.selectedPowerFilam;
	}
	set selectedPowerFilam(value:string) {
        this.$store.commit('selectedPowerFilam', value);
    }
	get optionsLum(): string {
		return this.$store.state.optionsLum;
	}
	set optionsLum(value:string) {
        this.$store.commit('optionsLum', value);
    }
	get selectedPowerLum(): string {
		return this.$store.state.selectedPowerLum;
	}
	set selectedPowerLum(value:string) {
        this.$store.commit('selectedPowerLum', value);
    }		
	get optionsSvet(): string {
		return this.$store.state.optionsSvet;
	}
	set optionsSvet(value:string) {
        this.$store.commit('optionsSvet', value);
    }
	get selectedPowerSvet(): string {
		return this.$store.state.selectedPowerSvet;
	}
	set selectedPowerSvet(value:string) {
        this.$store.commit('selectedPowerSvet', value);
    }
	
    public onlyFloat(evt) {
        var regex = new RegExp("^[0-9]+[.,]?[0-9]{0,2}$");
		var key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
		var s = evt.srcElement.value + key;
		evt.srcElement.value = evt.srcElement.value.replace(",", ".");
		if (!regex.test(s)) {
			event.preventDefault();
			return false;
		}   
    };
	
	public onlyInteger(evt) {
		var regex = new RegExp("^[0-9]+$");
		var key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
		var s = evt.srcElement.value + key;
		if (!regex.test(s)) {
			event.preventDefault();
			return false;
		}
	};
}
