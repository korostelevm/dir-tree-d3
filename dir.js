const dirTree = require("directory-tree");
let callback = (item, PATH, stats, c) => {
    item.size_disk = stats.blocks * 512
    if(item.type == 'directory'){
        item.size_disk = item.children.map(child => child.size_disk).reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
  }
}
// const tree = dirTree("./dir",{
const tree = dirTree("/tmp/korostelevm-yo-3/",{
    attributes: ["type"],
    exclude: [/\.git/, /\.npm/, /\.cache/] 
},callback,callback);

let size_mb = tree.size_disk / 1000000
size_mb = Math.round(size_mb * 100) / 100
// const tree = dirTree("./dir",{attributes: ["type"]},callback,callback);
const fs = require('fs')
fs.writeFileSync('dirs.json', JSON.stringify(tree))
console.log(tree)
console.log(size_mb)

