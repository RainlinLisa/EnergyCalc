import Vue from "vue";
import Component from "vue-class-component";
import TableCalc from "./tableCalcComp.vue";    

@Component({
	props: {},
   components: {
       "tablecalc-component": TableCalc,
   }})
export default class CalcProperty extends Vue {   
    private quantityLamp = '';
	private hrYear = '';
	private costEnergy = '';
	private dummy: number = 0;
	
	private lifeTimeFilam: number = 1000.00;
	private costLampFilam: number = 20.00;			
	private selectedPowerFilam: number = 40;
	private optionsFilam: any[] = [
			  { text: '40', value: 40 },
			  { text: '60', value: 60 },
			  { text: '75', value: 75 },
			  { text: '100', value: 100 }
			];
	
	private lifeTimeLum: number = 8000.00;
	private costLampLum: number = 90.00;			
	private selectedPowerLum: number = 12;
	private optionsLum: any[] = [
			  { text: '12', value: 12 },
			  { text: '15', value: 15 },
			  { text: '18', value: 18 },
			  { text: '20', value: 20 }
			];
	
	private lifeTimeSvet: number = 20000.00;
	private costLampSvet: number = 120.00;			
	private selectedPowerSvet: number = 8;
	private optionsSvet: any[] = [
			  { text: '8', value: 8 },
			  { text: '10', value: 10 },
			  { text: '12', value: 12 },
			  { text: '15', value: 15 }
			];
    
	Year = ['1 год', '3 года', '5 лет'];
	//lifeTime = [this.lifeTimeFilam];
	
	
    dataList = [0, 0, 0];
	private powerYear = [0, 0, 0];
	primaryInvest = [0, 0, 0];
    mega: Object = {
        'powerYear': [0, 1, 123123232321321321313213],
        };
	
    
    private calc_dataList() {
        this.dataList = [];
        this.powerYear = [];
		this.primaryInvest = [];
        for (let i of [this.selectedPowerFilam, this.selectedPowerLum, this.selectedPowerSvet]) {
            this.dataList.push(i * this.quantityLamp);
            this.powerYear.push(((i * +this.quantityLamp * +this.hrYear)/1000).toFixed(2));
        }
		for (let j of [this.costLampFilam, this.costLampLum, this.costLampSvet]) {
			this.primaryInvest.push((j * +this.quantityLamp).toFixed(2));
		}
    }

    public storeSet() {
        // TODO проверить если всё
        this.calc_dataList();
        this.$store.commit('storeInputs', this);
        
        this.mega.powerYear = this.powerYear;
        //this.mega.lifeTime = [this.lifeTimeFilam, this.lifeTimeLum, this.lifeTimeSvet];
        console.log("mega ", this.mega);
    }

	
	
	
	
    get computedAll(): boolean {
        return (this.quantityLamp && this.hrYear && this.costEnergy);
    };
	
    get powerLamp(): number {
        if (this.computedAll) {
			return this.quantityLamp * this.dataList[0];
		}
    };
	
	//get powerYear(): number {
        //if (this.computedAll) {
            //return ((this.hrYear * this.powerLamp)/1000).toFixed(2);
            
		//}
    //};
	
	/* get primaryInvestFilam(): number {
        if (this.computedAll) {
			return (this.quantityLamp * this.costLampFilam).toFixed(2)
		}
    }; */
	
	get costEnergyYear(): number {
        if (this.computedAll) {
			return (this.powerYear * this.costEnergy).toFixed(2)
		}
    };

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
