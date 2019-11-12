const express=require('express');
const fs=require('fs');

const app=express();
const port=3000;

app.use((req,res,next)=>{

    let now=new Date();
    let hour=now.getHours();
    let mins=now.getMinutes();
    let sec=now.getSeconds();
    let msec=now.getMilliseconds();

    let time=hour+":"+mins+":"+sec+"."+msec;
    let data =time+" "+req.method+" "+req.url;
    console.log(data);

    fs.appendFile('serverlog.txt',data+"\n",()=>{});
    
    next();

    console.log('after')
})

app.get('/',(req,res)=>{
    res.send('Main page');
    console.log("Main method")
})

app.listen((port),()=>{
    console.log('Server listen port 3000');
});