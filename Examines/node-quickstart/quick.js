var http = require('http');
// greeting.js
var readline = require('node:readline')
//var dt = require('./newmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); 



const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}`)
  //rl.close()
})