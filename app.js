const express = require('express');
const fs = require('fs');
const app = express();
var hostname = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
const port = 8080;
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
app.get('/', (req, res) => {
    fs.readFile('./public/index.html', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
})
//  res.writeHead(200, { 'Content-Type': 'text/html' });
//  fs.createReadStream('./public/index.html').pipe(res);
//  res.setHeader('Content-Type', 'text/plain');
  //  res.end('Hello World');
});
app.get('/hostname', (req, res) => {
    res.json({"hostname":hostname});    
    //res.end(hostname);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
//  console.log(hostname)
});