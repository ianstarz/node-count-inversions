const fs = require('fs');
const path = require('path');
const readline = require('readline');
const count = require('./index');

const currentDir = process.cwd();
const inFilePath = process.argv[2];

if (!fs.existsSync(inFilePath)) {
  throw new Error('file not found: ' + inFilePath);
}

const read = readline.createInterface({
  input: fs.createReadStream(inFilePath)
});

var integers = [];
read.on('line', function(line) {
  integers.push(Number(line));
});

read.on('close', function() {
  console.log(count(integers));
});
