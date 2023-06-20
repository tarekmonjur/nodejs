exports.add = () => {console.log('add...'); return 5+5;}
exports.sub = () => {console.log('sub...'); return 6-5;}
module.exports.mul = () => {console.log('mul...'); return 3*2;}

class ArithOp{
	static div() {
		console.log('div...');
		return 6/3;
	}
}

module.exports.arith = ArithOp;

console.log(module.filename);