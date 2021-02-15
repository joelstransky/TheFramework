import "bootstrap";
import $ from "jquery";
import { PageObserver, Bridge, Dispatcher } from "./Framework";
import * as Components from "./Framework/component";
export default class App {
  po: PageObserver;
  bridge: Bridge;
  dispatcher: Dispatcher;
  $observables;

  constructor() {
    this.po = new PageObserver();
    this.dispatcher = new Dispatcher(this);
    this.bridge = new Bridge(this.dispatcher);
    this.init();
  }
  init(): void {
    this.$observables = $("[data-component]").filter(
      (_, el) => $(el).parents("[data-component]").length === 0
    );
    this.connectComponents();
  }
  connectComponents(): void {
    this.$observables.each((i, el) => {
      const Comp: string = $(el).attr("data-component");
      const Component = new Components[Comp](el, this.bridge);
      this.po.subscribe(Component);
    });
    this.po.fire();
  }
  updateState(): void {
    console.log("App.updateState");
    this.po.fire();
  }
}
