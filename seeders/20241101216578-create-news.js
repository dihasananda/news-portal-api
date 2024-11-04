"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "News",
      [
        {
          id: 1,
          title: "sample title 1",
          content: "sample content 1",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          publishedAt: new Date()
        },
        {
          id: 2,
          title: "sample title 2",
          content: "sample content 2",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          publishedAt: new Date()
        },
        {
          id: 3,
          title: "sample title 3",
          content: "sample content 3",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          publishedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('News', null, {});
  },
};
