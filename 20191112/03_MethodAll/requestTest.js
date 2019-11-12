let http=require('http');
let port =3000;

let options={
    port:port,
    host:'localhost',
    method:'POST',
    path:'/?a=1000',
    headerExtension:{"Content-Type":"text/html"}
};

http.get(options);