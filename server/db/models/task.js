const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Status, User, Comment, Feedback, Tag, TaskTag,
    }) {
      this.hasOne(Status, { foreignKey: 'task_id' });
      this.belongsToMany(User, { through: Comment, foreignKey: 'task_id' });
      this.belongsToMany(User, { through: Feedback, foreignKey: 'task_id' });
      this.belongsToMany(Tag, { through: TaskTag, foreignKey: 'task_id' });
    }
  }
  Task.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    deadline: DataTypes.DATE,
    isDone: DataTypes.BOOLEAN,
    user_Owner: DataTypes.INTEGER,
    user_Worker: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
