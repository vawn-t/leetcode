var RandomizedSet = function () {
  const map = new Map();
  const list = new Array();
  const random = function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
  };

  this.map = map;
  this.list = list;
  this.random = random;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;

  const currentLength = this.list.length;
  this.map.set(val, currentLength);
  this.list[currentLength] = val;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  const index = this.map.get(val);

  // remove in list: swap last index to current index
  const lastItem = this.list[this.list.length - 1];
  this.list[index] = lastItem;
  this.list.pop();

  // remove in map: update index of last item
  this.map.set(lastItem, index);
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = this.random(this.list.length);

  return this.list[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
