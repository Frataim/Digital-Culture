module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Настройка CRM для Океанического музея',
        category: 1,
        description: 'Океаническому музею г. Калининград нужна помощь с&nbsp;переносом файлов из&nbsp;нашей crm &laquo;Планфикс&raquo; в&nbsp;наше облако (Облако тоже надо настроить). Необходимо знание API запросов и&nbsp;специфики облака. С&nbsp;нашей стороны специалист по&nbsp;crm настроит сценарии, а&nbsp;вам нужно будет сделать API запросы на&nbsp;перенос файлов, чтобы в&nbsp;crm оставалась только ссылка на&nbsp;файл, а&nbsp;сам файл уже хранился в&nbsp;облаке. Наш специалист по&nbsp;crm будет вам помогать на&nbsp;протяжении всей задачи. Фонд готов на&nbsp;основании договора между вами и&nbsp;фондом заплатить небольшое вознаграждение за&nbsp;выполнение данной задачи. Размер оплаты по&nbsp;договорённости.',
        deadline: '2022-02-14 02:00:00',
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
