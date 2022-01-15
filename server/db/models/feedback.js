const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
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
  Feedback.init({
    feedback: DataTypes.TEXT,
    task_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};
