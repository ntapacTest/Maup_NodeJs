// HTTP сервер

const http=require('http');
const  utils=require('util');

http.createServer((req,res)=>{
    let requestInfo=utils.format("HTTPVersion : %s,\n"+
        "Method : %s, \n" +
        "Status code : %s, \n"+
        "URL : %s,\n" +
        "Headers : %s", req.httpVersion,req.method, req.statusCode,req.url,req.headers);


    res.writeHead(200,{'Content-Type':'text/plain'});
    for (let key in req.headers){
        console.log(key, ' : ', req.headers[key]);
    }
    res.write(requestInfo)
    res.end();
}).listen(3000,()=>{console.log('Server start on port 3000');});

