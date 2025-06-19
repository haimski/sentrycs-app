class ActionListener {
  constructor() {
    this.listeners = {};
  }

  registerListener(action, listener) {
    if (!this.listeners[action]) {
      this.listeners[action] = [];
    }
    this.listeners[action].push(listener);
  }

  removeListener(action) {
    delete this.listeners[action];
  }

  emit(action, data) {
    const handlers = this.listeners[action];
    if (!handlers) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }
    for (const fn of handlers) {
      fn(data);
    }
  }
}

export default ActionListener;
