const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      this.belongsTo(Task, { foreignKey: 'task_id' });
    }
  }
  Status.init({
    status: DataTypes.STRING,
    task_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};
