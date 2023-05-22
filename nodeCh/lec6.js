const fs=require('fs');

// fs.mkdirSync('thapa');

fs.writeFileSync('thapa/bio.txt','hello pawan');
fs.writeFileSync('thapa/bio.txt', 'i am pawan sharma');
fs.appendFileSync('thapa/bio.txt',' i am learning node js');

fs.renameSync('thapa/bio.txt', 'thapa/mybio.txt');

const data=fs.readFileSync('thapa/mybio.txt','utf8');
console.log(data);

fs.unlinkSync('thapa/mybio.txt');
fs.rmdirSync('thapa');

