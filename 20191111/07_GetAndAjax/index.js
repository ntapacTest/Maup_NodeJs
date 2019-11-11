const fs=require('fs');
const url=require('url');
const http=require('http');
const  path=require('path');

const server=http.createServer((req,res)=>{
    // let path=url.parse(req.url).pathname;
    // path='main/'+path.substr(1);

    if(req.url=='/'){
        let file_path=path.join(__dirname,'main\\index.html');
        fs.readFile(file_path,(err,data)=>{
            if(err) {
                console.log(err);
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not found');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
            console.log('data from file was sent');
            res.end();
        })
    } else if(req.url=='/request'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1 style="color: red">Hello!!!</h1>');
        console.log('data was sent');
        res.end();
    }

}).listen(3000,()=>{console.log('Server start on port 3000');});