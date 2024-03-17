const http = require("http");
const fs = require("fs");

const router = require('./router')

const server = http.createServer(routes);

server.listen(3000); //localhost:3000