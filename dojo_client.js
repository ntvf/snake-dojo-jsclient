var http = require('http');
//
var answer = require('./answer');
var BOARD_SIZE = 15;//const
//Creating Http sever and listening to every request;
http.createServer(function (req, res) {
    //Parsing the request ang ejecting te "board" parameter;
    var request = require('url').parse(req.url, true);
    board = request.query.board;
    //Exiting if there is no board, or it is incorrect;
    if(!board){
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.end("<h1>400</h1>No board parameter!");
      return;
    };
    if(board.length % BOARD_SIZE) {
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.end("<h1>400</h1>Bad board parameter!");
      return;
    };
  //Asynchronous function to parse inputted board, print to the console and get answer;
  split(board, function(board) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer.getAnswer(board));
  });
}).listen(8888, '127.0.0.1');

var split = function (board, callback) {
  //Function for formatting board before printing;
  var splitBoard = function(board, callback) {
    var result = '';
    var temp = board;
      for(var i = 0; i < BOARD_SIZE; i++) {
        result = result + temp.substring(0,BOARD_SIZE) + '\n';
        temp = temp.substring(BOARD_SIZE);
      } 
    callback(result);
    return result;
  }
  //Anonymous function for asynchronous printing formatted board to console;
  board = splitBoard(board, function(board) {
    console.log(board);
  });
  callback(board);

  
}