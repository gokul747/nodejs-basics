const http = require("http");
const fs= require("fs");

const server = http.createServer((req, res) => {
  // Home page
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  }

  // About page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  }
  
  // streaming
  else if(req.url === "/file"){
      const readstrean =fs.createReadStream("./sample.mp4")
      res.writeHead(200, { "Content-Type": "video/mp4" });
   
      readstrean.pipe(res);
  }

  // JSON response
  else if (req.url === "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"name":"gokul"}');
  }

  // Page not found
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server listening at http://localhost:5000");
});