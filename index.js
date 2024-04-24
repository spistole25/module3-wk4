import fs from 'fs';
import _ from 'lodash';
import { color, log, red, green, blue } from 'console-log-colors';
import request from 'request' ;

const myarray = [ 1, 2, 3, 4, 5, 8, 4, 3, 9];

console.log(color.red(myarray));

const output = _.uniq(myarray);

console.log(output);

const file = fs.readFileSync('./data.json', {encoding: 'utf8'});
console.log(color.red(file));


//asynchronous way
//an async file access method

fs.readFile('./data.json', {encoding: 'utf8'}, (err,f) => console.log(color.green(f)));

request('https://jsonplaceholder.typicode.com/posts', (err, resp, body) => {
    const parsed = JSON.parse(body);
    parsed.forEach( (x) => console.log(x));
});

