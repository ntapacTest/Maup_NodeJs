let evt=require('events');

let emitter=new evt.EventEmitter();

let count =0;

let endFile=false;

let print=()=>{
    count++;
    console.log('print - ', count);
}

let test=()=>{
    console.log('Test - 1111');
};


emitter.once('create',function(){
    console.log('Created!!!')
})

// Синхронные подписки
emitter.on('create', print);

// Асинхронные подписки
emitter.on('create',()=>{    
    setImmediate(()=>{        
        console.log("Async Listener #1 "+endFile);
    });
});

// Синхронные подписки
emitter.addListener('create',print);
// Синхронные подписки
emitter.on('create',()=>{console.log("Sync Listener #3");});

// Асинхронные подписки
emitter.on('create',()=>{    
    setImmediate(()=>{
        console.log("Async Listener #4 "+endFile);
    });
});

emitter.on('create', test);

emitter.emit('create');
emitter.emit('create');

console.log('del test subscription')
emitter.removeListener('create', test);

emitter.emit('create');

console.log('Remove all listeners');

emitter.removeAllListeners();

emitter.emit('create');

// Устанавливаем значение true, когда закончилось выполнение, для проверки времени запуска асинхронных подписок
endFile=true;

