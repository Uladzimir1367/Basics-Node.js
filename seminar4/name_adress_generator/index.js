const faker = require('faker');

function generateRandomName() {
   return faker.name.findName();
}

function generateRandomAddress() {
   return faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country();
}

module.exports = {
   generateRandomName, generateRandomAddress
};

