//const CardsavrSession = require("@strivve/strivve-sdk/lib/2.0/transpiled-node-js/CardsavrJSLibrary-2.0")["CardsavrSession"]

//console.log(new CardsavrSession("api.staging.cardsavr.io", "TwPdMV4EN4stSaRGIw1sNBaOJ+aBF2wuinDzyB36Wac=", "Hopenware", "hopenware", "93oWf^N0fH%q"))

// content of index.js
const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const port = 3000

const requestHandler = (request, response) => {

  if (request.url == '/test.html') {
    fs.readFile('./test.html', 'utf8', function(err, contents) {
      response.end(contents)
    });
  } else if (request.url == '/') {
    console.log(request.method)
    response.writeHead(200, {'Set-Cookie': request.method+'=1; domain=local.cardsavr.io', 
                             'Content-type': 'application/json',
                             'Access-Control-Allow-Origin': 'http://brand.local.cardsavr.io:3000',
                             'Access-Control-Allow-Methods': 'POST, PUT, GET, HEAD, OPTIONS'});
    response.end('{}');
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})