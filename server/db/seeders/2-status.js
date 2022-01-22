module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Statuses', [
      {
        id: 1,
        status: 'open',
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 2,
        status: 'match',
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 3,
        status: 'done',
        createdAt: null,
        updatedAt: null,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};
