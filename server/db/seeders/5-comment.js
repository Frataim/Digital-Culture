module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Comments', [
      {
        comment: 'Готов угадать эту мелодию с 4 ноты',
        task_id: 1,
        user_id: 1,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        comment: 'Готов угадать эту мелодию с 2 ноты',
        task_id: 1,
        user_id: 2,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        comment: 'Ой всё, отстаньте',
        task_id: 2,
        user_id: 3,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
