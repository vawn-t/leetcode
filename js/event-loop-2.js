async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2() {
	console.log('async2');
}

console.log('script start');

setTimeout(function () {
	console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
	console.log('promise1');
	resolve();
}).then(function () {
	console.log('promise2');
});

console.log('script end');

// 1 - start

// 6 - async function start

// 10 - promise constructor

// 12 - end

// 3 - promise 1 resolved

// 7 - after first await

// 11 - promise then

// 9 - after second await

// 2 - timeout callback

// 4 - nested timeout

// 5 - promise 2 resolved8 - timeout in async
