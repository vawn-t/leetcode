var majorityElement1 = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i].toString();
    let value = map.get(key);

    const currentCount = value ? ++value : 1;

    map.set(key, currentCount);
  }

  function getKeyByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue) {
        return key;
      }
    }
    return undefined;
  }

  const largestValue = Math.max(...map.values());

  const res = getKeyByValue(map, largestValue);

  return res;
};

var majorityElement = function (nums) {
  const map = new Map();
  let res = 0;
  let majority = 0;

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i].toString();
    let value = map.get(key);

    const currentCount = value ? ++value : 1;

    if (currentCount > majority) {
      majority = currentCount;
      res = nums[i];
    }

    map.set(key, currentCount);
  }

  return res;
};

majorityElement([3, 2, 3]);
