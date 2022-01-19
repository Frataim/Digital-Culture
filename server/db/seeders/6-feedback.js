module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Feedbacks', [
      {
        feedback: 'Андрей -- большой профессионал, хорошо выполнил свою задачу и в срок!',
        task_id: 3,
        user_id: 5,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        feedback: 'Как заказчики, ребята из Гаража, -- невменько, мне пришлось тристо раз переделывать одно и то же, просто потому, что они никак не могли определиться, что им конкретно нужно. Не рекоммендую с ними сотрудничать в роли волонтера!',
        task_id: 3,
        user_id: 7,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  },
};
