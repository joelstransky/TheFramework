export default class Bridge {
  dispatcher;
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
  updateState(): void {
    this.dispatcher.dispatch({ type: "UPDATE_STATE" });
  }
}
