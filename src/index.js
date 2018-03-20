'use strict';

const http = require('http');
const url = require('url');

const data = {
  name: 'Chang',
  age: 26,
  birthday: '1992-12-29',
};

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  if (urlInfo.path === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });

    res.end(JSON.stringify(data));
  }
});

server.listen(9000);

console.log('-----------------------------');
console.log('server running');
