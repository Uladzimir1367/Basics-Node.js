### Random Data Generator
A simple library to generate random names and addresses using the faker library.

#### Installation
First, install the faker library:

1. npm install faker

Then, install the random-data-generator library:

2. npm install name_adress_generator

#### Usage
Create a file, for example, app.js, and use the library as follows:

const randomData = require('name_adress_generator');

console.log('Random Name:', randomData.generateRandomName());
console.log('Random Address:', randomData.generateRandomAddress());

Functions: generateRandomName() Generates a random name.

            generateRandomAddress() Generates a random address.