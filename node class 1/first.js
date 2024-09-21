/* what is Node
what is npm
npm init
how to install packages 
window object 
modules in node js
how export and import works 
 modules.exports=a
 const a=require("./index.js") //old method

type of modules : file, build-in(fs),external


*/

//in-build os path http
const htttp=require('http')

const server =htttp.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/plain'});

    if(req.url ==="/"){
        res.write("welcome to the home page")
    }
    else if(req.url==='/about'){
        res.write("Welcome tp the abput page")
    }
    else if(req.url==='/contantUs'){
        res.write("Welcome tp the contact us page")
    }
    else{
        res.write('page not found')
    }
})


const PORT =3000
server.listen(3000,()=>{
    console.log("listening to port 3000 on localhost");
})




