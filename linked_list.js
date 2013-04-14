var LinkedList = module.exports = function() {
  this._items = [];
  this._head = null;
};

LinkedList.prototype.add = function(node) {
  var lastItem = this._items[this._items.length - 1];

  if (lastItem) {
    lastItem.next = node;
  }

  this._items.push(node);
};

LinkedList.prototype.head = function() {
  return this._items[0];
}

LinkedList.Node = function(value) {
  this.value = value;
  this.next = null;
}
