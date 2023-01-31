const dirTree = require("directory-tree");
const tree = dirTree(".",{attributes: ["size", "type"]});
const fs = require('fs')
fs.writeFileSync('dirs.json', JSON.stringify(tree))
console.log(tree)

