console.log('1 - start');

setTimeout(() => {
	console.log('2 - timeout callback');
}, 0);

Promise.resolve()
	.then(() => {
		console.log('3 - promise 1 resolved');
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('4 - nested timeout');
				resolve();
			}, 0);
		});
	})
	.then(() => {
		console.log('5 - promise 2 resolved');
	});

async function asyncFunc() {
	console.log('6 - async function start');
	await Promise.resolve();
	console.log('7 - after first await');
	setTimeout(() => {
		console.log('8 - timeout in async');
	}, 0);
	await Promise.resolve();
	console.log('9 - after second await');
}

asyncFunc();

new Promise((resolve) => {
	console.log('10 - promise constructor');
	resolve();
}).then(() => {
	console.log('11 - promise then');
});

console.log('12 - end');

// 1 - start
// 6 - async function start
// 10 - promise constructor
// 12 - end
// 3 - promise 1 resolved
// 5 - promise 2 resolved
// 7 - after first await
// 9 - after second await
// 11 - promise then
// 2 - timeout callback
// 4 - nested timeout
// 8 - timeout in async
