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
      this.belongsTo(Status, { foreignKey: 'status' });
      this.belongsTo(User, { foreignKey: 'owner' });
      this.hasMany(Comment, { foreignKey: 'task_id' });
      this.hasMany(Feedback, { foreignKey: 'task_id' });
      this.belongsToMany(Tag, { through: TaskTag, foreignKey: 'task_id' });
    }
  }
  Task.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    deadline: DataTypes.DATE,
    status: DataTypes.INTEGER,
    isDone: DataTypes.BOOLEAN,
    owner: DataTypes.INTEGER,
    worker: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
