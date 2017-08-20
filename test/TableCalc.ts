import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class TableCalc extends Vue {
    private dummy: number = 0;

    get q (): string {
        console.log("Обновляю!");
        return this.$store.getters.qqqq;
    }
    
}
