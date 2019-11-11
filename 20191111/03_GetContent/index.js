// Работа с запросами, запрос контента с сайта
const  request=require('request');

request('http://viti.edu.ua',(err,res,body)=>{
    if(err){
        console.log(err);
    } else {
        //console.log(res);
        console.log(body);
    }
})


