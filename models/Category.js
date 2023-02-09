// importing model,datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
// requiring database file
const sequelize = require("../config/connection.js");
// creating a class category by extending sequelize model
class Category extends Model {}

Category.init(
  {
    // defining columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
