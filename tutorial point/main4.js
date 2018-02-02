 var fs=require('fs');
 var data='';

var readerStream=fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){

 data+=chunk;

});

readerStream.on('end',function(){

	console.log(data);

});
readerStream.on('error',function(err){

	console.log(err.stack);

});
console.log("Program Ended");

data="write data";

var wirteStream=fs.createWriteStream('output.txt');

wirteStream.write(data,'UTF8');


wirteStream.end();

wirteStream.on('finish',function(){
	console.log("Write completed")
});

wirteStream.on('error',function(err){

console.log(err.stack);

});
console.log("Program Ended");

