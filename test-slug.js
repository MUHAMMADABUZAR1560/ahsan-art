const fs = require('fs');
const content = fs.readFileSync('lib/blog.ts', 'utf8');
console.log(content.match(/slug:.*?,/g));
