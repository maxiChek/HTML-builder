const fs = require('fs/promises');
const path = require('path');
let dir = path.join(__dirname, 'files');
let copy = path.join(__dirname, 'files-copy');

function copyDir() {
  fs.rm(copy, {
    force: true,
    recursive: true,
  }).finally(function () {
    fs.mkdir(copy, { recursive: true });
    fs.readdir(dir, { withFileTypes: true }).then(function (data) {
      data.forEach(function (file) {
        if (file.isFile()) {
          let pathFile = path.join(dir, file.name);
          let pathFileCopy = path.join(copy, file.name);
          fs.copyFile(pathFile, pathFileCopy);
        }
      });
    });
  });
}
copyDir();
