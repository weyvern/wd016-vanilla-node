// Common JS
// const { writeFile } = require('fs');
// ES6 module
import { writeFile } from 'fs';

const data = 'hello';

const callback = err => {
  if (err) throw err;
  console.log('The file has been saved!');
};

writeFile('test.html', data, callback);
