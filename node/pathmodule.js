const path = require('path');

console.log(path.sep);
console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder",'subfolder','file.txt')
console.log(filepath)
console.log(path.basename(filepath));

