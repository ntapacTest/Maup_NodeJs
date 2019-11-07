// Максимальное количество подписчиков (10) поднимаем до 20

let evt=require('events').EventEmitter;
let emt=new evt();

emt.setMaxListeners(20);

for (let i = 0; i < 20; i++) {
    emt.on('click', function(){
        console.log('Listener #'+i);
    });
}

console.log(emt.listenerCount('click'));