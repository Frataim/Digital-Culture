const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Task, { foreignKey: 'task_id' });
    }
  }
  Comment.init({
    comment: DataTypes.STRING,
    task_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
