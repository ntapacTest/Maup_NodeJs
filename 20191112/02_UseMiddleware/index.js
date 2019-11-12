const express=require('express');
const path=require('path');

let catalog='public';

const app=express();

app.use((req,res,next)=>{
    console.log('use');
    next();
});

app.use('/', express.static(path.join(__dirname,catalog)));

app.use((req,res,next)=>{
    console.log('use2');
    next();
});

app.listen((3000),()=>{
    console.log('Server listen port 3000');
});


app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,catalog,'index.html'))
})
