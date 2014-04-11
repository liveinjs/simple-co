function co(generator) {
	return function(fn) { 
		
		//generator-iterator
		var gen = generator;
		
		next(); //
		/**
		 * 函数功能:
		 * 一: 每一次运行时，把 next 自已 
		 * 
		 * 
		 * */

		function next(err, result) {
			if(err){
				return fn(err);
			}
			var step = gen.next(result); //注意: 这里把异步函数 接收到的第二个参数 作为 yield 的返回值。 
			if (!step.done) {
				step.value(next); //把 next 注册为 setp.value 的异步函数 参数，排入异步函数队列。
			} else {
				fn(null, step.value);
			}
		}
		
	}
}

module.exports = co;
