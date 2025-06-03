/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		let j = i + 1;

		while (j < prices.length) {
			const cal = prices[j] - prices[i];
			if (cal > profit) {
				profit = cal;
			}
			j++;
		}
	}

	return profit;
};

var maxProfit = function (prices) {
	let min = prices[0];
	let profit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < min) {
			min = prices[i];
		}

		profit = Math.max(profit, prices[i] - min);
	}

	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
