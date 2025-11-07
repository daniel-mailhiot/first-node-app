// Import statements should be at the top
import fs from 'fs';
import os from 'os';
import chalk from 'chalk';
import figlet from 'figlet';
import {add, multiply} from './math.js'

console.log('Sum:', add(5, 3));
console.log('Multiply:', multiply(5, 3));

fs.writeFileSync('message.txt', 'Hello from Node.js (ESM)!');
const data = fs.readFileSync('message.txt', 'utf8');
console.log('File contents:', data);

console.log('Operating System:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

figlet('Node Rocks!', (err, data) => {
    if (err) { console.log('Something went wrong...');
        return;
    }
    console.log(data);
});

console.log(chalk.green('Hello World'));

/*
UTF-8 - encoding system that uses 8 binary digits to represent an alphabetic character
*/