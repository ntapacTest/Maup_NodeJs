const express=require('express');

const app=express();
const port=3000;

let routerAbout=express.Router();
app.use('/about',routerAbout);

routerAbout.route('/')
.get((req,res)=>{res.send('Get Method');})
.post((req,res)=>{res.send('Post Method')});

app.get('/',(req,res)=>{res.send('Main page')})

app.listen((port),()=>{
    console.log('Server listen port 3000');
});