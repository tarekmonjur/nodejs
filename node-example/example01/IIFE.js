
var foo = "bar";

(function name(bar){
	var foo = bar;
	console.log(foo);
})(foo);

console.log(foo);