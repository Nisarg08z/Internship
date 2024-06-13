const util = require('util')

let description = "my name is %s and age is %d"
result = util.format(description,"nisarg",19)
console.log(result);