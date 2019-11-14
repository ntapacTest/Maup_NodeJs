let express=require('express');
let expressSession=require('express-session');

let app=express();

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"Secret Key"
}));

app.use((req,res)=>{
    if(!req.session.flag){
        req.session.userName='UserName';
        req.session.flag=true;
        console.log('Create session');
    }   
    console.log(req.session.userName);
    res.end();
});

app.get('/',(req,res)=>{

});

app.listen((3000),()=>{
    console.log('Server listen port 3000');
});
