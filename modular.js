var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback){
	fs.readdir(dir, function (err,list){
		if (err) return callback(err);
		var newList = [];
	for (var i=0; i<list.length; i++){
		if (path.extname(list[i]) === '.' + ext){
			newList.push(list[i]);
		}
	};
	return callback(null,newList);
});
};