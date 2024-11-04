"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          username: "sampeUser1",
          password: "sampeluser1",
          email: "sampeluser@sample.com",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          username: "sampeUser2",
          password: "sampeluser2",
          email: "sampeluser@sample.com",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          username: "sampeUser3",
          password: "sampeluser3",
          email: "sampeluser@sample.com",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  },
};
