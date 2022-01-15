module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        role: 'admin',
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 2,
        role: 'owner',
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 3,
        role: 'worker',
        createdAt: null,
        updatedAt: null,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
