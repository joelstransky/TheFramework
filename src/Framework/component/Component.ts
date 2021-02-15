import { Bridge } from "../";
import $ from "jquery";

export interface IComponent {
  init();
  render();
}

export default class Component implements IComponent {
  el: HTMLElement;
  $el;
  bridge: Bridge;
  constructor(el: HTMLElement, bridge) {
    this.el = el;
    this.$el = $(el);
    this.bridge = bridge;
    this.init();
  }
  init(): void {
    console.log("Component init", this);
    this.$el.css("border", "1px solid red");
  }
  render(): void {
    console.log("Rendering", this);
  }
}
