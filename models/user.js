'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Challange, { through: models.StudentChallange })
    }

    fullName(first_name, last_name) {
      return `${first_name} ${last_name}`
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    grade: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};