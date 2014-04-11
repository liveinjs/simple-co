var co = require('./co');

//包装异步函数，返回一个函数，这个函数接受一个 异步函数 为参数。
function readFile(filename) {
	return function(callback) {
		require('fs').readFile(filename, 'utf8', callback);
	};
}

//Generator-iterator 生成品
function* Generator() {
	var file1 = yield readFile('./file/a.txt'); // return {done: xxx, value:  callback}
	var file2 = yield readFile('./file/b.txt');

	console.log(file1);
	console.log(file2);
	return 'done';
}


// 生成 Generator-iterator 对象
var g = Generator();


co(g)(function(err, result) {
	console.log(result)
});
