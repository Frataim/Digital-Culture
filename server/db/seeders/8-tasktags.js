module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('TaskTags', [
      {
        task_id: 1,
        tag_id: 2,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        task_id: 2,
        tag_id: 1,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        task_id: 3,
        tag_id: 1,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        task_id: 3,
        tag_id: 4,
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('TaskTags', null, {});
  },
};
