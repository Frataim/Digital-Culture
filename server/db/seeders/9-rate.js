module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Rates', [
      {
        rate: 5,
        user_id: 2,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 3,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 3,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 4,
        user_id: 3,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 4,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 4,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 3,
        user_id: 4,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 2,
        user_id: 5,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 3,
        user_id: 5,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 3,
        user_id: 5,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 6,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 6,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 6,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 2,
        user_id: 7,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 7,
        createdAt: null,
        updatedAt: null,
      },
      {
        rate: 5,
        user_id: 7,
        createdAt: null,
        updatedAt: null,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Rates', null, {});
  },
};
