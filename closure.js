function makeAdder(x) {
	console.log("value of x :",x);
	function add(y) {
		console.log("value of y :",y);

		function add2(z) {
			console.log("value of z:",z);
			return x+y+z;
		}
		return add2;
	}
	return add;
	
};
var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
var plusTwenty = makeAdder(20);

var plusOne1 = plusOne(2);
var plusTen1 = plusTen(20);
var plusTwenty1 = plusTwenty(40);

console.log(plusOne1(3));
console.log(plusTen1(13));
console.log(plusTwenty1(11));
