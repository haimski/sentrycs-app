function ActionListener() {
  this.listeners = {};
}

ActionListener.prototype.registerListener = function(action, listener) {
  if (!this.listeners[action]) {
    this.listeners[action] = [];
  }
  this.listeners[action].push(listener);
};

ActionListener.prototype.removeListener = function(action) {
  delete this.listeners[action];
};

ActionListener.prototype.emit = function(action, data) {
  const handlers = this.listeners[action];
  if (!handlers) {
    console.log(`No listeners for action: ${action}`);
    throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
  }
  for (const fn of handlers) {
    fn(data);
  }
};

let actionListener = new ActionListener();

actionListener.registerListener('PRINT', function(data) {
    console.log(`Don't tell me what I ${data} or ${data}'t do`);
});

actionListener.registerListener('PRINT', function(data) {
    console.log(`I eat pickles right of the ${data}`);
});

actionListener.emit('PRINT', 'Can');

actionListener.removeListener('PRINT');

actionListener.emit('PRINT', 'Can');