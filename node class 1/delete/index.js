// console.log("hello from app.js");

// const { log } = require('console');
// const func=require('./fun')

// console.log(func("sanglap"))

// different modules that we have 

//fs : file system module

// const fs =require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {

//     if(err) throw err;

//     console.log(data);
// });

// fs.writeFile('newfile.txt', 'this is a new file', (err) => {
//    if(err)  throw err;
//    console.log("File created!"); 
// });



// url 

// const url = require('url');
// const path = require('path');

// const myURL = new URL('https://www.example.com/search?q=node.js&sort=desc');

// console.log(myURL.searchParams.get('q')); // node.js


// path module

// console.log(path.basename('C:\web dev classes\JavaScript-course-august-batch\node class 1\delete\index.js'));

// os
// const os=require('os');

// console.log(os.type());

// console.log(os.platform());

// console.log(os.arch());

// console.log(os.cpus());


// crypto

// const crypto = require('crypto');

// const hash = crypto.createHash('sha256');

// hash.update('hello world');



// http module 

const http=require('http');

const url=require('url');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end('Hello World');

    const path=req.url

    if(path==='/'){
        res.end('Hello Home Page');
    }
    else if(path==='/about'){
        res.end('Hello About Page');
    }
    else if(path==='/contact'){ 
        res.end('Hello Contact Page');
    }
    else{
        res.end('Page Not Found');
    }
})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`listening on port localhost:${PORT} now...`);
})