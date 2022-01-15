module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Exhibition in London',
        category: 1,
        description: 'Help to create a new website for exhibition in London',
        deadline: '2013-10-27 02:00:00',
        isDone: false,
        status: 1,
        owner: 2,
        worker: null,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        title: 'Museum chat',
        category: 2,
        description: 'We want to make a very specialized chat for museum specialists',
        deadline: '2013-10-27 02:00:00',
        isDone: false,
        status: 1,
        owner: 2,
        worker: null,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        title: 'Bla-bla',
        category: 2,
        description: 'We want to make a very specialized chat for museum specialists',
        deadline: '2013-10-27 02:00:00',
        isDone: false,
        status: 2,
        owner: 1,
        worker: 3,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
