var fs = require('fs');

fs.writeFileSync('test.txt', 'test');
console.log(fs.readFileSync('test.txt').toString());


var path = require('path');
var websiteHome = '~/Desktop//home.html';
var websiteAbout = 'Desktop/about.html';

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));


setInterval(function(){
	console.log('w');
}, 2000);


console.log(__dirname);
console.log(__filename);


