const fs = require('fs');
const path = require('path')
const dirname= path.join(__dirname,"files");
//__dirname will give the current path
console.log(dirname)
console.log(`${dirname}/hello${0}.txt`,"my name is manisha")
for(let i =0;i<5;i++)
{
    fs.writeFileSync(`${dirname}/hello${i}.txt`,"my name is manisha")
}

