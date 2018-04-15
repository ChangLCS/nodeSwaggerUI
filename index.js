'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const mineType = require('./mineType.js');

const documentPath = './public';
const indexArr = ['/', '/index', '/index.html'];

const pathReg = new RegExp(/(.*)(\.[^\.]*)/);

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);

  let reqPath = '';

  if (indexArr.indexOf(urlInfo.path) > -1) {
    reqPath = `${documentPath}/index.html`;
  } else {
    reqPath = `${documentPath}${urlInfo.path}`;
  }

  const pathArr = urlInfo.path.match(pathReg);

  console.log('reqPath', reqPath);
  fs.readFile(reqPath, function(err, data) {
    res.writeHead(200, {
      'content-type': pathArr ? `${mineType[pathArr[2]]};charset=utf-8` : 'charset=utf-8',
    });
    res.write(data);
    res.end();
  });
});

server.listen(5000);

console.log('-----------------------------');
console.log('swagger-ui running');
