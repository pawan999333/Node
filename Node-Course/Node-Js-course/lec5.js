const fs=require('fs');

fs.writeFileSync('read.txt','Hello world');
fs.writeFileSync('read.txt', 'welcome999 to coding');
fs.appendFileSync('read.txt', ' I am pawan sharma');

fs.renameSync('read.txt','readwrite.txt');

 const buf_data=fs.readFileSync('readwrite.txt');
 console.log(buf_data);

 const data=buf_data.toString();
 console.log(data);