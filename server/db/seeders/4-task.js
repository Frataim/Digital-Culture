module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Настройка CRM для Третьяковской галереи',
        category: 'Веб-сайты',
        description: 'Третьяковской галерее нужна помощь с созданием специального внутреннего сайта для сотрудников, чтобы можно было хранить экспертные заключения о стоимости предметов искусства, безопасно и без утечек',
        deadline: '2022-02-14 02:00:00',
        isDone: false,
        status: 1,
        owner: 4,
        worker: null,
        createdAt: '2022-01-15 02:00:00',
        updatedAt: '2022-01-15 02:00:00',
      },
      {
        title: 'Чат-бот для музея Импрессионизма',
        category: 'Чат-боты',
        description: 'Нам нужен чат-бот для закрытой группе бенифициаров нашего музея. Это поможет нам привлечь больше средств на развитие. Чат-бот на telegram',
        deadline: '2022-01-30 02:00:00',
        isDone: false,
        status: 1,
        owner: 2,
        worker: 6,
        createdAt: '2022-01-17 02:00:00',
        updatedAt: '2022-01-17 02:00:00',
      },
      {
        title: 'Видеоигра для инфопанели на Экологическую выставку',
        category: 'Игры',
        description: 'На выставке, посвященной экологии в музее Garage требуется сделать простую игру про переработку отходов',
        deadline: '2022-03-10 02:00:00',
        isDone: true,
        status: 3,
        owner: 5,
        worker: 7,
        createdAt: '2022-01-19 02:00:00',
        updatedAt: '2022-01-19 02:00:00',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
