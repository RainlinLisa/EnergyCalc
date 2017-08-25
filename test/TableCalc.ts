import Vue from "vue";
import Component from "vue-class-component";

@Component({
	props: [
		"template"
	]
})
export default class TableCalc extends Vue {
	private EnergyYearArray = [];
	private numberReplaceArray = [];
	private costNumberReplaceArray = [];
	private allCostYearArray = [];
	private savingYearArray = [];

	get computedAll () {
		return (this.$store.getters.costEnergy && this.$store.getters.hrYear && this.$store.getters.quantityLamp);
	}

    get lifeTime () {
        return [this.$store.getters.lifeTimeFilam, this.$store.getters.lifeTimeLum, this.$store.getters.lifeTimeSvet];
    }

	get costLamp () {
        return [this.$store.getters.costLampFilam, this.$store.getters.costLampLum, this.$store.getters.costLampSvet];
    }

	// Стоимость электроэнергии за 1 год, руб.
	get EnergyYear () {
		this.EnergyYearArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.$store.getters.powerYear.length; i++) {
				this.EnergyYearArray[i] = (this.$store.getters.powerYear[i] * this.$store.getters.costEnergy);
			}
		}
		return this.EnergyYearArray;
    }

	// Количество ламп под замену или условное количество ламп с выработанным ресурсом за 1 год, шт.
	get numberReplaceLamp () {
		this.numberReplaceArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.lifeTime.length; i++) {
				this.numberReplaceArray[i] = ((this.$store.getters.hrYear * this.$store.getters.quantityLamp) / this.lifeTime[i] );
			}
		}
		return this.numberReplaceArray;
    }

	// Стоимость ламп под замену за 1 год (накопления на замену ламп), руб
	get costNumberReplaceYear () {
		this.costNumberReplaceArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.costLamp.length; i++) {
				this.costNumberReplaceArray[i] = (this.numberReplaceLamp[i] * this.costLamp[i]);
			}
		}
		return this.costNumberReplaceArray;
    }

	// Всего затрат на 1 год, руб.
	get allCostYear () {
		this.allCostYearArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.EnergyYear.length; i++) {
				this.allCostYearArray[i] = (this.EnergyYear[i] + this.costNumberReplaceYear[i]);
			}
		}
		return this.allCostYearArray;
    }

	// СБЕРЕЖЕНИЯ за N год (по сравнению с лампами накаливания), руб.
	get savingYear () {
		this.savingYearArray = [0, 0, 0];
		if (this.computedAll) {
			for (let i = 0; i < this.EnergyYear.length; i++) {
				this.savingYearArray[i] = (this.allCostYear[0] - this.allCostYear[i]);
			}
		}
		return this.savingYearArray;
    }
}
