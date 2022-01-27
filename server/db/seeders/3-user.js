module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Администратор",
          email: "admin@mail.ru",
          role: 1,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume: "админ",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Светлана Жукова",
          email: "impress@gmail.com",
          role: 2,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume: "Музей Русского импрессионизма",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Айнур Анваров",
          email: "ajnur@gmail.com",
          role: 3,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume:
            "Создание и сопровождение сайтов. - индивидуальный подход - погружаюсь в ваше дело - адаптивный сайт под все устройства - удобная админ панель - продвижение сайта",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Елизавета Побережная",
          email: "tretyak@gmail.com",
          role: 2,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume: "Третьяковская галерея, отдел коммуникаций",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Михаил Крайнов",
          email: "garage@gmail.com",
          role: 2,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume: "Музей GARAGE, специальные проекты",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Александр Гусев",
          email: "gusev@gmail.com",
          role: 3,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume: "Разработка, сопровождение и поисковая оптимизация сайтов на WordPress и не только",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Андрей Титов",
          email: "titov@gmail.com",
          role: 3,
          avatar: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
          password: "123",
          resume: "Делаю все, что можно придумать, веб и не только, люблю культуру",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
        {
          name: "Иван Лысенков",
          email: "ivan@gmail.com",
          role: 3,
          avatar: "http://localhost:3001/ivan.jpg",
          password: "123",
          resume:
            "Создание и сопровождение сайтов. - индивидуальный подход - погружаюсь в ваше дело - адаптивный сайт под все устройства - удобная админ панель - продвижение сайта",
          createdAt: "2013-10-27 02:00:00",
          updatedAt: "2013-10-27 02:00:00",
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Users", null, {})
  },
}
