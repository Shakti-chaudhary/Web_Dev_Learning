const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "applicationjson" });
    res.write("Hello from node http server updated again,");
    res.end();
  })
  .listen(4500);
