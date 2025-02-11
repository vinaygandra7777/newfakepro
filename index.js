// var fr = require("fs")
// arr = ['index122.js','index23.js',"index24.js"]
// arr.filter(file =>{
//     fr.unlink(file,(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
// })
// console.log(num)
// for (let x of arr){
//     fr.unlink(x,(err)=>{

//     })
// }
// var http = require("http");
// var response = http.createServer((req,res) =>{
//     if(req.method==="GET"){
//         res.write("GET mnethod")
//         res.end()
//     }
//     if(req.method ==="POST"){
//         res.write("post method")
//         res.end()
//     }
//     if(req.method==="PUT"){
//         res.write("PUT method");
//         res.end()
//     }
// });
// var port = 3000;
// response.listen(port,()=>{
//     console.log("server is runinng"+"http://l ocalhost:"+port);
// } );
var http = require("http");
var url = require("url");
var server = http.createServer(async(req,res)=>{
    var data = await fetch('https://fakestoreapi.com/products')
    var response = await data.json()
    var urldata = req.url;
    var pasreurl = url.parse(urldata,true)
    var cate = pasreurl.query.cat;
    switch (cate){
        case "m":
            var result = response.filter((val)=>{
                 return val.category ==="men's clothing"
            })
            res.write(JSON.stringify(result))
            res.end()
            break;
        case "w":
            var result = response.filter((val)=>{
                 return val.category==="women's clothing"
            })
            res.write(JSON.stringify(result));
            res.end()
            break;
        case "j":
            var result = response.filter((val)=>{
                 return val.category==="jewelery"
            })
            res.write(JSON.stringify(result));
            res.end()
            break;
        case "e":
            var result = response.filter((val)=>{
                 return val.category==="electronics"
            })
            res.write(JSON.stringify(result));
            res.end()
            break;
        default:
            res.write(JSON.stringify(response))
            res.end()
    }
});
server.listen(3000,()=>{
    console.log('server is running')
});
// var http = require('http');
// var server = http.createServer((req,res)=>{
//     if(req.method=="POST"){
//     fetch("https://fakestoreapi.com/products").then((val)=>{
//     return val.json()})
//     .then((val)=>{
//         res.write(JSON.stringify(val))
//     res.end()
//     });

//     }else{
//         res.end("hi this is vinay");
//     }
// })
// server.listen(3000,()=>{
//     console.log("server is ruhning")
// })