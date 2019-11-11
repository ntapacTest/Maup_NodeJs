// Работа с файловой системой

let fs=require('fs');

let str='message to file';

fs.writeFile('text.txt', str, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('file was wrote');
})

fs.readFile('text.txt',{encoding:'utf-8'}, function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

fs.readdir('../..',function(err,filenames){
    if(err){
        console.log(err);
        return;
    }
    console.log(filenames);
});

