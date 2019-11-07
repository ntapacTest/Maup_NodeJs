let a=20;

function test(){
    console.log('Hi! I am module. a = '+a);
    console.log(module);
}

// Плохой способ
// global.a=a;
// global.func=test;

// exports.a=a;
// exports.func=test;

module.exports={
    a:a,
    func:test
}



