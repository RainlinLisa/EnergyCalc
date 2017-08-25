import Vue from "vue";
import Component from "vue-class-component";

@Component({
	props: [
		'template',
		'hrYear',
       // 'powerYear',
        'mega',
	]
})
export default class TableCalc extends Vue {
    private dummy: number = 0;
	private EnergyYearArray = [];
	private numberReplaceArray = [];
	private costNumberReplaceArray = [];
	
	get computedAll () {
		return (this.$store.getters.costEnergy && this.$store.getters.hrYear && this.$store.getters.quantityLamp)
	}

    get lifeTime () {
        return [this.$store.getters.lifeTimeFilam, this.$store.getters.lifeTimeLum, this.$store.getters.lifeTimeSvet];
    }
    
    get powerYear () {
        return this.$store.getters.powerYear;
    }
	
	// Стоимость электроэнергии за 1 год, руб.
	get EnergyYear () {
		this.EnergyYearArray = [];
		if (this.computedAll) {
			for (let i of (this.$store.getters.powerYear)) {
				this.EnergyYearArray.push(i * this.$store.getters.costEnergy)
			}
		}
		return this.EnergyYearArray;
    }
	
	// Количество ламп под замену или условное количество ламп с выработанным ресурсом за 1 год, шт.
	get numberReplaceLamp () {
		this.numberReplaceArray = [];
		if (this.computedAll) {
			for (let i of [this.$store.getters.lifeTimeFilam, this.$store.getters.lifeTimeLum, this.$store.getters.lifeTimeSvet]) {
				this.numberReplaceArray.push(Math.round((this.$store.getters.hrYear * this.$store.getters.quantityLamp)/(i * this.$store.getters.costEnergy)));
			}
		}
		return this.numberReplaceArray;
    }
	
	// Стоимость ламп под замену за 1 год (накопления на замену ламп), руб
	get costNumberReplaceYear () {
		this.costNumberReplaceArray = [];
		if (this.computedAll) {
			for (let i=0; i < this.lifeTime.length; i++) {
				this.costNumberReplaceArray.push((this.$store.getters.hrYear * this.$store.getters.quantityLamp)/(this.lifeTime[i] * this.costLamp[i]));
			}
		}
		return this.costNumberReplaceArray;
    }
	
	
	get costEnergy () {
        return (this.$store.getters.costEnergy);
    }
	
	get costLamp () {
        return [this.$store.getters.costLampFilam, this.$store.getters.costLampLum, this.$store.getters.costLampSvet];
    }
    
    get q (): string {
        console.log("Обновляю!");
        return this.$store.getters.quantityLamp;
    }
}
