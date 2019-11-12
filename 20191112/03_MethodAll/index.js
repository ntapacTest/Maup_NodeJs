const express=require('express');

const app=express();
const port=3000;

app.all('*',(req,res)=>{
    console.log('Method: '+req.method);
    console.log('Query: '+JSON.stringify(req.query));
    console.log('Protocol: '+req.protocol);
    console.log('Secure: '+req.secure);
    console.log('Accepts: '+req.accepts(['text/html','application/json','text/plain']));
    console.log('Content-Type: '+req.get('Content-Type'));

    res.end();
});

app.listen((port),()=>{
    console.log('Server listen port 3000');
});