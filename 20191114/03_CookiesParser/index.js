const express=require('express');
const cookieParser=require('cookie-parser');

const app=express();

// app.use('/faveicon.ico',(req,res,next)=>{
//     res.end();
// })

app.use(cookieParser('Secret string'));

app.get('/',(req,res)=>{
    //res.cookie('login','admin',{maxAge:1000});
    res.cookie('login','admin',{maxAge:100000,signed:true});
    console.log(req.cookies);
    console.log(req.signedCookies);
    // console.log('req: '+JSON.stringify(req.cookies));
    // console.log('res: '+JSON.stringify(res.cookies));

    res.end();
});

app.listen((3000),()=>{
    console.log('Server listen port 3000');
});
