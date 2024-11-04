"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          name: "category 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "category 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "category 3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});
  },
};
