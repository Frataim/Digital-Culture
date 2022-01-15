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
      Role, Rate, Comment, Task, Feedback,
    }) {
      this.belongsTo(Role, { foreignKey: 'role' });
      this.hasMany(Task, { foreignKey: 'worker' });
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
    resume: DataTypes.TEXT,
    role: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
