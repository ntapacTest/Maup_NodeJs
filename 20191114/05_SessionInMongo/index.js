let express=require('express');
let expressSession=require('express-session');
let mongoStore=require('connect-mongo')(expressSession);

let app=express();

let store=new mongoStore({
    url:'mongodb://localhost:27017/test-app'
});

app.use(expressSession({
    store,
    resave:false,
    saveUninitialized:false,
    secret:"Secret Key"
}));

app.use((req,res)=>{
    console.log(req.session);

    req.session.numbReq1=req.session.numbReq1+1;    

    
    //req.session.numbReq1=isNaN(req.session.numbReq1)?0:req.session.numbReq1;
    //isNaN(req.session.numbReq)?0:req.session.numbReq;
    
    // let reqCount=()=>{
    //     return isNaN(req.session.numbReq1)?0:req.session.numbReq1;
    // };
    //  res.end(reqCount());

    res.end();
});

app.get('/',(req,res)=>{

});

app.listen((3000),()=>{
    console.log('Server listen port 3000');
});
