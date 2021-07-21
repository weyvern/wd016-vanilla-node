import axios from 'axios';
import { writeFile } from 'fs';

const callback = err => {
  if (err) throw err;
  console.log('The file has been saved!');
};

axios.get('https://google.com').then(({ data }) => {
  writeFile('google.html', data, callback);
});
