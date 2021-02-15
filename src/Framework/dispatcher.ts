import App from "../App";

export default class Dispatcher {
  app: App;
  constructor(app: App) {
    this.app = app;
  }
  dispatch(action): void {
    switch (action.type) {
      case "UPDATE_STATE":
        this.app.updateState();
        break;
      default:
        break;
    }
  }
}
