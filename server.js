const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = __dirname + "/public/index.html";

  //console.log(req.url);

  switch (req.url) {
    case "/contact":
      filePath = __dirname + "/public/contact.html";
      break;
    case "/about":
      filePath = __dirname + "/public/about.html";
      break;

    default:
      filePath = __dirname + "/public/index.html";
      break;
  }

  fs.readFile(filePath, (err, data) => {
    res.statusCode = 200; // ok
    res.setHeader("Content-Type", "text/html");
    res.end(data, "utf8");
    console.log(err);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
