// process.argv
// Run command: "node index Ivan 20"

console.log(process.argv);

let nodePath=process.argv[0];
let appPath=process.argv[1];
let name=process.argv[2];
let age=process.argv[3];

console.log(nodePath);
console.log(appPath);
console.log(name);
console.log(age);

console.log(process.platform);
console.log(process.arch);
console.log(process.pid);

console.log("Test num %d str %s", 50, "str_value");

//console.log(process);