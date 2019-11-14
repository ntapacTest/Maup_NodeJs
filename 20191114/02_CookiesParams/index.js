const express=require('express');
const path=require('path');
const Cookies=require('cookies');

const app=express();

// app.use('/faveicon.ico',(req,res,next)=>{
//     res.end();
// })

app.use((req,res,next)=>{
    
    if(req.url=='/faveicon.ico'){
        res.end();
    }
    console.log('Client cookies v1: '+req.headers['cookie']);

    let cookies=new Cookies(req,res,{"keys":['Secret-String']});

    let cookieOptions={
        maxAge: 10000,
        path:'/admin',
        secure:false,
        signed:true
    }

    cookies.set('admin','admName3',cookieOptions);

    console.log('Client cookies v2: '+cookies.get('admin'));

    res.sendFile(__dirname+'/index.html'); 

});


app.listen((3000),()=>{
    console.log('Server listen port 3000');
});
