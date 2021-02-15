import { Component } from "./";
import $ from "jquery";
export default class Card extends Component {
  init(): void {
    super.init();
    this.$el.find(".btn").on("click", () => {
      console.log("clicked");
      this.bridge.updateState();
      return false;
    });
  }
}
