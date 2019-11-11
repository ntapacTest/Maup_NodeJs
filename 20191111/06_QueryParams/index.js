const url = require('url');
const http = require('http');

http.createServer((req, res) => {
    let query=url.parse(req.url,true).query;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('GET params :'+JSON.stringify(query));
    res.end();
}).listen(3000,()=>{console.log('Server start on port 3000');});