var Obsr = require('../src/obsr.b.m.js');

(function() {
	'use strict';
	var o = { num: 1, str: 'two', arr: ['zero', 'one', 'two', 'three', 'four'], obj: { hello: 'world'} };

	var observed = Obsr(o, function (key, value) {
		console.log('|');
		console.log('cb k: ' + key);
		console.log('cb v: ' + value);
		console.log('|');
	});


	// Array Removes
	// console.log('original length: ' + observed.arr.length);
	// observed.arr.del(0);
	// console.log('new length: ' + observed.arr.length);


	// Array Inserts
	// console.log('original length: ' + observed.arr.length);
	// observed.arr.ins(-1, 'new start');
	// observed.arr.ins(observed.arr.length, 'new end');
	// console.log(observed.arr);
	// console.log('new length: ' + observed.arr.length);


	// Object Removes
	// console.log('original length: ' + observed.arr.length);
	// observed.arr.del(0);
	// console.log('new length: ' + observed.arr.length);


	// Object Inserts
	observed.obj.ins('moo', { doo: 'poo' });
	console.log('original value: ' + observed.obj.moo.doo);
	observed.obj.moo.doo = 'oop';
	console.log('new value: ' + observed.obj.moo.doo);

	// observed.obj.ins('foo', 'bar');
	// console.log('new value: ' + observed.obj.foo);

}());

/*

	['zero', 'one', 'two', 'three', 'four']
	   0       1      2      3        4

	['zero', 'one', 'three', 'four']
	   0       1       2       3

*/
