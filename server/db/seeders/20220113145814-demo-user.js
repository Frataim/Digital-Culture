module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'doe@gmail.com',
        avatar: 'https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg',
        password: '123',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        name: 'Natalie Parse',
        email: 'nat@gmail.com',
        avatar: 'https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg',
        password: '123',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        name: 'Megan Fox',
        email: 'fox@gmail.com',
        avatar: 'https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg',
        password: '123',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
