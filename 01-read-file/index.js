const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
const output = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
output.on('data', (data) => stdout.write(data));
