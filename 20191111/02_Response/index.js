// Работа с запросами

const http=require('http');


http.get("http://ukr.net", (res)=>{
    console.log(res.statusCode);
    console.log(res.headers)
}).on('error',(err => {
    console.log(err);
}))