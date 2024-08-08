const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello from backend");
    res.end();
  })
  .listen(4500);
