console.log("welcome to my channel")
const m = require('./app.js');
console.log(m.m());
let arr=[1,4,3,6,7,8];
let resArray=arr.filter(function(item,index){
    return item===3;
})
console.log(resArray)
const fs=require('fs')
//module---simple or complex functionality tht can be reused in node js project
//core modules---inbuild models
//global == no need to import by using require   ------  console
//non -global neeed to import --- fs-http

fs.writeFileSync("mans.txt","my name is mas")
console.log(process)
 




