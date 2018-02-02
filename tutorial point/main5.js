var fs = require("fs");
var zlib = require('zlib');
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);





// Compress the file input.txt to input.txt.gz
fs.createReadStream('input2.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input2.txt.gz'));
  
console.log("File Compressed.");

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input2.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input2.txt'));
  
console.log("File Decompressed.");
console.log("Program Ended");
