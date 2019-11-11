// Передача параметров обработчику

let evt=require('events').EventEmitter;
let emt=new evt();

emt.on('click', function(a, b){
    console.log("a = "+a+", b = "+b);
});

emt.on('click', function(a, b){
    console.log(arguments);
});

emt.emit('click',24,30);

emt.emit('click',{a:10,b:20},30);