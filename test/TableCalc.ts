import Vue from "vue";
import Component from "vue-class-component";

@Component({
	props: [
		'template',
		'hrYear',
		'lifeTimeFilam'
	]
})
export default class TableCalc extends Vue {
    private dummy: number = 0;
	lifeTime = [this.$store.getters.lifeTimeFilam, this.$store.getters.lifeTimeLum, this.$store.getters.lifeTimeSvet];

    get q (): string {
        console.log("Обновляю!");
        return this.$store.getters.quantityLamp;
    }

	get numberReplaceLamp (): string {
        return (this.$store.getters.hrYear * this.$store.getters.quantityLamp);
    }
}
