const fs=require('fs');

fs.writeFileSync('file2.txt','hii');

// const data=fs.readFileSync('file1.txt','utf8');

// console.log(data);
// console.log("hello world");


const data=fs.readFile('file2.txt','utf8', (err,data) => {
    console.log(data);
});
console.log("hello world3");