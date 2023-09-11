'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Kien',
     lastName: 'Trung',
     email: 'abc@gmail.com',
    password: '123456',
    address: 'gia lai',
    gender: 1,
    typeRole: 'ROLE',
    keyRole :'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

