const fs = require('fs')

path1 = 'file1.txt'
path2 = 'file2.txt'
path3 = 'file3.txt'

let a = 10
let b = 20

fs.writeFile('file1.txt',"helllllllllllo",()=>{console.log("nisarg")})

console.log(a+b)

console.log("finish reading file")