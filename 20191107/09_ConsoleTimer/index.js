// Базовые методы класа console

// timer

let arr=[];

console.time('one');

for (let i = 0; i < 1000000; i++) {
   arr[i]=i*i;
}

console.timeEnd('one');