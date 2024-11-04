const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');

const News = sequelize.define('News', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    publishedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

News.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(News, { foreignKey: 'categoryId' });

module.exports = News;
