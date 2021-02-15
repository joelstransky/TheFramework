import { IComponent } from "./component";

export default class PageObserver {
  observables: IComponent;
  constructor() {
    this.observables = [];
  }

  subscribe(comp: IComponent): number {
    return this.observables.push(comp);
  }

  unsubscribe(compToRemove: IComponent): void {
    this.observables = this.observables.filter((comp) => comp !== compToRemove);
  }

  fire(): void {
    console.log("fire called", this.observables);
    this.observables.forEach((comp) => comp.render());
  }
}
