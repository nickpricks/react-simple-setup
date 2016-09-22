const express = require('express');
const Buffer = require('buffer').Buffer;
const app = express();

app.use(express.static('build'));

const buf1 = Buffer.alloc(10);
console.log('buffer1', buf1);

const buf2 = Buffer.alloc(10, 1);
console.log('buffer2', buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log('buffer3', buf3);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
