/*use strict*/
// Подписка на собития добавления и удаления подписки

let evt=require('events').EventEmitter;
let emt=new evt();

let count=0;

emt.on('newListener', function(event, listener){
    if(event=='click'){
        console.log("Click was added to emt.");
    }
});

emt.on('removeListener',function(event,listener){
    if(event=='click'){
        console.log('Click was removed from emt')
    }
});

emt.on('click',function(){
    console.log('click func');
});

console.log(emt.listenerCount('click'));

emt.removeAllListeners('click');

console.log(emt.listenerCount('click'));