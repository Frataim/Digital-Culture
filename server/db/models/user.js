const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Resume, Role, Rate, Comment, Task, Feedback
    }) {
      this.hasOne(Resume, { foreignKey: 'user_id' });
      this.hasOne(Role, { foreignKey: 'user_id' });
      this.hasMany(Rate, { foreignKey: 'user_id' });
      this.hasMany(Rate, { foreignKey: 'user_rated' });
      this.belongsToMany(Task, { through: Comment, foreignKey: 'user_id' });
      this.belongsToMany(Task, { through: Feedback, foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
