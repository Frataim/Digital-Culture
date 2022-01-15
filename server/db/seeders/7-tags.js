module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tags', [
      {
        tag: 'Музей',
        createdAt: null,
        updatedAt: null,
      },
      {
        tag: 'Галерея',
        createdAt: null,
        updatedAt: null,
      },
      {
        tag: 'Арт-пространство',
        createdAt: null,
        updatedAt: null,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
