const express=require('express');
const path=require('path');

const app=express();

app.use((req,res,next)=>{
    console.log('Client cookies: '+req.headers['cookie']);

    res.setHeader('Set-Cookie',['name=admin2','name2=user2']);
    res.sendFile(__dirname+'/index.html');   
});


app.listen((3000),()=>{
    console.log('Server listen port 3000');
});
