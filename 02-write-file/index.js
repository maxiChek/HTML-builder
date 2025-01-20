const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

fs.access(path.join(__dirname, 'text.txt'), fs.F_OK, (err) => {
  if (err) {
    fs.writeFile(path.join(__dirname, 'text.txt'), '', (err) => {
      if (err) throw err;
    });
  }
});
stdout.write('Enter your name, please:\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  } else {
    fs.appendFile(path.join(__dirname, 'text.txt'), data, (err) => {
      if (err) throw err;
    });
  }
});
process.on('sigint', () => process.exit());
process.on('exit', () => console.log('\nNice to meet you all'));
