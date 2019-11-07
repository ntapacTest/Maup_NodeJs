let evt=require('events');

let emitter=new evt.EventEmitter();

let endFile=false;

let print=(text)=>{
    count++;
    console.log(text);
}

// Асинхронные подписки
emitter.on('create',function asyncPrint1(){    
    setImmediate(()=>{        
        console.log("Async Listener #1 "+endFile);
    });
});

// Асинхронные подписки
emitter.on('create',function asyncPrint2(){    
    setImmediate(()=>{        
        console.log("Async Listener #2 "+endFile);
    });
});

// Асинхронные подписки, добавляем подписку в начало очереди
emitter.prependListener('create',function asyncPrint3(){    
    setImmediate(()=>{        
        console.log("Async Listener #3 "+endFile);
    });
});

// Синхронные подписки
emitter.addListener('create',function syncPrint1(){    
           
        console.log("Sync Listener #1 "+endFile);
});

// Синхронные подписки
emitter.addListener('create',function syncPrint2(){    
           
    console.log("Sync Listener #2 "+endFile);
});

// Синхронные подписки, добавляем подписку в начало очереди
emitter.prependListener('create',function syncPrint3(){  
    console.log("Sync Listener #3 "+endFile);   
});

emitter.emit('create');

// Устанавливаем значение true, когда закончилось выполнение, для проверки времени запуска асинхронных подписок
endFile=true;