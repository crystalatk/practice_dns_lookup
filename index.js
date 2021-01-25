const DNS = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('For what website would you like to find the IP address?', (answer) => {
    DNS.lookup(answer, (err, address) => {
            console.log(`The error is: ${err}!`);
            console.log(`Domain Name: ${answer}
IP Address: ${address}`);
    })
})