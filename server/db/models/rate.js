'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rate.init({
    user_id: DataTypes.INTEGER,
    user_rated: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};