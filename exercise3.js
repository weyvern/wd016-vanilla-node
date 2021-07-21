import { readFile } from 'fs';

const callback = (err, data) => {
  if (err) throw err;
  console.log(data);
};
// Get raw data (as buffer)
readFile('./test.html', callback);
// Get data with encoding
readFile('./test.html', 'utf8', callback);
