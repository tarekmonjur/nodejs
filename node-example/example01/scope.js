"use strict";
var foo = "bar";

function bar() {
	var foo = "baz";
	console.log(foo);
}

function baz(foo) {
	foo = "bam";
	bam = "yah";
}

console.log(foo);
bar();
console.log(foo);
baz(foo);
console.log(bam);