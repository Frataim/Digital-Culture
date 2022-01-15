module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Feedbacks', [
      {
        feedback: 'Очень круто, респектую',
        task_id: 1,
        user_id: 1,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        feedback: 'Вполне сносно',
        task_id: 1,
        user_id: 2,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        feedback: 'Ужас ваще',
        task_id: 2,
        user_id: 3,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  },
};
