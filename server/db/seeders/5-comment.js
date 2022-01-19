module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Comments', [
      {
        comment: 'Готов выполнить вашу задачу, буду рад сотрудничеству, вот ссылка на мое портфолио: сиви.ру',
        task_id: 1,
        user_id: 3,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        comment: 'Я уже делал что-то подобное для музея в Ставрополе, готов и вам помочь, вот ссылка на мой сайт: сайт.ру',
        task_id: 1,
        user_id: 6,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        comment: 'У меня мало опыта, но мне было бы интересно поработать над этой задачей, спасибо!',
        task_id: 1,
        user_id: 7,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
