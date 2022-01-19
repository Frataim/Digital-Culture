module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tags', [
      {
        tag: 'музей',
        createdAt: null,
        updatedAt: null,
      },
      {
        tag: 'галерея',
        createdAt: null,
        updatedAt: null,
      },
      {
        tag: 'арт-пространство',
        createdAt: null,
        updatedAt: null,
      },
      {
        tag: 'экология',
        createdAt: null,
        updatedAt: null,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
