// Использование глобальных переменных

console.log("Directory name: ", __dirname);
console.log("File name: ", __filename);

// Использование объекта path

let path=require('path');

// Имя файла с расширением без пути
console.log(path.basename(__filename));

// Преобразование относительного пути в абсолютный
console.log(path.resolve('./test'));

// Вывод расширения файла
console.log(path.extname(__filename));

// Проверка абсолютный путь или нет
console.log(path.isAbsolute('./test'));
console.log(path.isAbsolute(__filename));

// Генерация пути к файлу на основании пути к каталогу и имени файла
let fileName='09_file.js';
let filePath=path.join(__dirname, fileName);
console.log(filePath);

// Парсинг информации о пути и файле в объект
console.log(path.parse(filePath));

// Разделитель который используется в системе
console.log(path.sep);


// Использование объекта url

let url=require('url');
let myUrl="http://user:pass@host.com:8080/p/a/t?query=string&r=10#hash";

let myUrlObject=url.parse(myUrl,true);

console.log(myUrlObject);

myUrlObject.protocol='https';

let formatedUrl=url.format(myUrlObject);

console.log(formatedUrl);
