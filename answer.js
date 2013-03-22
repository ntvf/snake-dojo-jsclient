//Importing directions; 
var direction = require('./direction');
//implementation of simple random response
exports.getAnswer = function (board) {
	var random = Math.floor(Math.random()*4)+1;
	if (random === 1) {
		return direction.RIGHT;
	} 
	if (random === 2) {
		return direction.LEFT;
	} 
	if (random === 3) {
		return direction.UP;
	} 
	if (random === 4) {
		return direction.DOWN;
	} 


}

