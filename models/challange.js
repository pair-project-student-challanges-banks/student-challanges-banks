'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Challange.belongsToMany(models.User, { through: models.StudentChallange, foreignKey: 'ChallangesId' })
    }
  };
  Challange.init({
    title: DataTypes.STRING,
    deadline: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Challange',
  });
  return Challange;
};