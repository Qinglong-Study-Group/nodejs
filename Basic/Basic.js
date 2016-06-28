console.log('');
console.log('Prototype');
function u(){
	this.n = '';
	this.l = 100;
	this.h = function(i){
		this.l -= i;
		console.log(this.l);
	}
};
var a = new u();
a.h(5);
u.prototype.m = 33;
u.prototype.t = function(){
	console.log('h');
}
console.log(a.m);
a.t();


console.log('');
console.log('Difference between == and ===');
console.log(19 == '19');
console.log(19 === '19');

console.log('');
console.log('Reference')
var s = {
	h : 'ha',
	a : 'ah'
};
var sc = s;
sc.h = 'r';
console.log(s.h);

console.log('');
console.log('This')
var t = {
	tt: function(){
		console.log(this === t);
	}
};
t.tt();
function w(){
	console.log(this === global);
};
w();

console.log('');
console.log('Multiple requests');
var r = function(i){
	console.log(i);
	q(function(){
		console.log('r'+i);
	})
}
var q =function(callback){
	setTimeout(callback, 5000);
}
r(1);
r(2);
r(3);

