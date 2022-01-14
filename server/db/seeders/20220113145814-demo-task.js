module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Exhibition in London',
        category: 'web-design',
        description: 'Help to create a new website for exhibition in London',
        deadline: '2013-10-27 02:00:00',
        isDone: false,
        user_Owner: 1,
        user_Worker: 2,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        title: 'Museum chat',
        category: 'web-hook',
        description: 'We want to make a very specialized chat for museum specialists',
        deadline: '2013-10-27 02:00:00',
        isDone: false,
        user_Owner: 3,
        user_Worker: 2,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
