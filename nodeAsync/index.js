const fs=require('fs');

fs.writeFile('file1.txt', 'demo for async file', (err)=>{

    console.log("file created");
});


fs.appendFile('file1.txt','iron man avengers are the best', (err) => {

    console.log('append data successfully');
});


const data = fs.readFile('file1.txt', 'utf8', (err,data) => {
    console.log(data);
})
