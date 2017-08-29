import { VisualComponent } from "../../Controls/VisualComponent";
import { IVisualRenderParams } from "../../Definitions/Controls";
import { createCalc } from "./main";

export class CalcEnergy extends VisualComponent {
    private container: HTMLElement;
    
   
    public render(renderParams: IVisualRenderParams): void {
        this.onBeforeRender.Trigger(this.getId());
        this.container = renderParams.container;
        this.container.className = 'test-container';
        this.container.innerHTML = '<calcproperty></calcproperty>';
        createCalc();
        this.onAfterRender.Trigger(this.getId());
    }

};

