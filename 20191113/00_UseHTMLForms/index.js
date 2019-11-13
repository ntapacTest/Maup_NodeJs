const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');

const app=express();
const port=3000;

app.use((req,res,next)=>{

    let now=new Date();
    let hour=now.getHours();
    let mins=now.getMinutes();
    let sec=now.getSeconds();
    let msec=now.getMilliseconds();

    let time=hour+":"+mins+":"+sec+"."+msec;
    let data_in =time;
        
    next();

    now=new Date();
    hour=now.getHours();
    mins=now.getMinutes();
    sec=now.getSeconds();
    msec=now.getMilliseconds();

    time=hour+":"+mins+":"+sec+"."+msec;
    data_out =time;

    fs.appendFile('serverlog.txt', 'req in : '+data_in+", req out : "+data_out+" req info : "+" "+req.method+" "+req.url+" \n",()=>{});
    console.log('req in : '+data_in+", req out : "+data_out+" req info : "+" "+req.method+" "+req.url+" \n");

})

app.use('/reg',bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');

});

app.post('/reg',(req,res)=>{
    
    console.log(req.body);
    res.send('User name : '+req.body.userName+', Age : '+req.body.userAge);
});

app.listen((port),()=>{
    console.log('Server listen port 3000');
});