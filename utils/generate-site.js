const fs = require('fs');

// writing files
const writeFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

module.exports = { writeFile };