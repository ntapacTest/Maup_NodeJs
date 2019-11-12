const express=require('express');

const app=express();

app.listen((3000),()=>{
    console.log('Server listen port 3000');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'\\main\\index.html');
})

app.get('/products',(req,res)=>{
    // res.sendStatus(404);
    res.status(404).send('Resource not found :(')
})

app.get('/',(req,res)=>{
    res.send('Hello world');
})
