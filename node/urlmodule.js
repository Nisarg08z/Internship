const url = require('url')

const myurl = new URL('https://www.google.com:325')
myurl.pathname = '/folder/subfolder'
myurl.search = '?name=nisarg'
myurl.hash = '#secretfile.ppt'

console.log(myurl.host)
console.log(myurl.hostname)
console.log(myurl.href)