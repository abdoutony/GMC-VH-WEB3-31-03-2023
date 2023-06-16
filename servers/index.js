const http = require("http")
// http.createServer((req,res)=>{
//       res.write("Hello")
//       res.end()
// }).listen(8080)

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1> Hello world</h1>")
    res.end()
}).listen(8080)

const products = [
    { id: 1, title: "Men tshirt", price: "20$" },
    { id: 2, title: "sweatshirt", price: "30$" },
  ];

  http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/json"})
    res.write(JSON.stringify(products))
    res.end()
}).listen(8081)


