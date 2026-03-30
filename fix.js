const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.js')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/\\\`/g, '\`').replace(/\\\${/g, '${');
    fs.writeFileSync(f, content);
    console.log("Fixed " + f);
});
