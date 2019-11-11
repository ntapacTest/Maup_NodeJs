const fs=require('fs');
const url=require('url');
const http=require('http');

http.createServer((req,res)=>{
   let path=url.parse(req.url).pathname;
   path='main/'+path.substr(1);

   fs.readFile(path,(err,data)=>{
      if(err) {
         console.log(err);
         res.writeHead(404, {'Content-Type': 'text/plain'});
         res.end('Not found');
         return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
      console.log('data was sent');
      res.end();
   })

}).listen(3000);

console.log('Server start on port 3000');