
var listSearch = require('./modular.js');

listSearch(process.argv[2], process.argv[3], function(err,list){
	for (var i = 0; i<list.length; i++)
	console.log(list[i]);
});