'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hotel', [{
      "hotelName": "Glushkovo",
      "createdAt": "2021-08-17 15:38:48",
      "updatedAt": "2021-09-13 14:04:46"
    }, {
      "hotelName": "Obala",
      "createdAt": "2021-06-19 21:54:56",
      "updatedAt": "2021-11-06 09:34:34"
    }, {
      "hotelName": "Vertientes",
      "createdAt": "2022-05-07 12:14:45",
      "updatedAt": "2022-04-20 05:52:51"
    }, {
      "hotelName": "Charlotte",
      "createdAt": "2021-12-01 07:55:58",
      "updatedAt": "2021-09-30 14:58:27"
    }, {
      "hotelName": "Ibirité",
      "createdAt": "2022-02-13 20:16:03",
      "updatedAt": "2021-09-06 20:32:06"
    }, {
      "hotelName": "Jinglou",
      "createdAt": "2021-10-01 14:04:11",
      "updatedAt": "2021-08-25 00:21:01"
    }, {
      "hotelName": "Selaphum",
      "createdAt": "2022-01-15 22:10:41",
      "updatedAt": "2021-09-15 12:14:28"
    }, {
      "hotelName": "Pahonjean",
      "createdAt": "2021-12-05 16:51:33",
      "updatedAt": "2022-03-25 23:00:40"
    }, {
      "hotelName": "Hongyang",
      "createdAt": "2021-11-07 11:26:05",
      "updatedAt": "2022-06-15 12:23:21"
    }, {
      "hotelName": "Sainyabuli",
      "createdAt": "2022-02-22 03:52:41",
      "updatedAt": "2022-01-21 16:11:26"
    }, {
      "hotelName": "Gornji Petrovci",
      "createdAt": "2021-08-28 02:32:27",
      "updatedAt": "2021-12-22 13:18:35"
    }, {
      "hotelName": "Cape Town",
      "createdAt": "2022-03-16 13:47:47",
      "updatedAt": "2021-06-19 16:24:50"
    }, {
      "hotelName": "Huddinge",
      "createdAt": "2021-10-13 12:09:42",
      "updatedAt": "2022-01-25 04:49:19"
    }, {
      "hotelName": "Montaneza",
      "createdAt": "2022-01-14 17:37:21",
      "updatedAt": "2021-06-19 22:31:50"
    }, {
      "hotelName": "Vavoua",
      "createdAt": "2022-05-21 17:48:17",
      "updatedAt": "2022-01-23 22:39:15"
    }, {
      "hotelName": "Awka",
      "createdAt": "2021-11-07 19:41:47",
      "updatedAt": "2021-11-28 04:09:01"
    }, {
      "hotelName": "Yumbel",
      "createdAt": "2021-06-28 10:50:58",
      "updatedAt": "2022-01-31 17:05:32"
    }, {
      "hotelName": "Ovruch",
      "createdAt": "2022-06-05 20:21:28",
      "updatedAt": "2021-10-04 18:38:57"
    }, {
      "hotelName": "Ospina",
      "createdAt": "2022-05-19 14:02:06",
      "updatedAt": "2021-10-01 19:08:28"
    }, {
      "hotelName": "Stari Grad",
      "createdAt": "2021-08-31 04:24:30",
      "updatedAt": "2021-07-27 11:06:50"
    }, {
      "hotelName": "Sokolovo",
      "createdAt": "2022-01-11 15:45:34",
      "updatedAt": "2021-08-07 23:39:39"
    }, {
      "hotelName": "Conceição da Barra",
      "createdAt": "2021-09-20 00:55:54",
      "updatedAt": "2021-07-15 21:24:05"
    }, {
      "hotelName": "Banjarkemuning",
      "createdAt": "2021-08-22 22:50:19",
      "updatedAt": "2022-05-05 01:58:24"
    }, {
      "hotelName": "Cinyumput",
      "createdAt": "2021-06-29 02:06:47",
      "updatedAt": "2021-10-01 21:17:54"
    }, {
      "hotelName": "Paris 13",
      "createdAt": "2021-11-15 17:05:06",
      "updatedAt": "2021-08-14 00:39:50"
    }, {
      "hotelName": "Iperu",
      "createdAt": "2022-02-24 14:23:07",
      "updatedAt": "2021-09-25 06:27:20"
    }, {
      "hotelName": "Otwock",
      "createdAt": "2021-10-28 00:05:59",
      "updatedAt": "2022-06-07 09:50:06"
    }, {
      "hotelName": "Heilongkou",
      "createdAt": "2022-04-23 13:00:11",
      "updatedAt": "2022-05-10 19:05:58"
    }, {
      "hotelName": "Hai Riêng",
      "createdAt": "2021-06-21 23:25:14",
      "updatedAt": "2022-03-07 18:11:49"
    }, {
      "hotelName": "Ejmiatsin",
      "createdAt": "2021-09-22 05:59:09",
      "updatedAt": "2021-11-21 18:41:11"
    }, {
      "hotelName": "Maria Cristina",
      "createdAt": "2021-10-29 18:43:09",
      "updatedAt": "2021-11-07 10:10:43"
    }, {
      "hotelName": "São José dos Campos",
      "createdAt": "2021-12-02 04:16:04",
      "updatedAt": "2022-04-22 23:33:08"
    }, {
      "hotelName": "Chino",
      "createdAt": "2022-02-05 02:02:44",
      "updatedAt": "2022-01-30 08:35:51"
    }, {
      "hotelName": "Yaxi",
      "createdAt": "2022-04-30 14:15:14",
      "updatedAt": "2022-01-19 02:54:00"
    }, {
      "hotelName": "Machinga",
      "createdAt": "2021-12-28 10:31:15",
      "updatedAt": "2021-11-12 20:44:35"
    }, {
      "hotelName": "Yizhivtsi",
      "createdAt": "2022-05-11 06:16:12",
      "updatedAt": "2021-08-21 17:55:36"
    }, {
      "hotelName": "Khon San",
      "createdAt": "2022-05-26 08:46:53",
      "updatedAt": "2021-10-02 14:14:11"
    }, {
      "hotelName": "Partikan",
      "createdAt": "2021-08-07 04:34:52",
      "updatedAt": "2021-08-21 11:06:00"
    }, {
      "hotelName": "Yangong",
      "createdAt": "2022-03-31 10:20:37",
      "updatedAt": "2022-02-21 05:58:21"
    }, {
      "hotelName": "Dolní Bojanovice",
      "createdAt": "2021-06-20 16:08:46",
      "updatedAt": "2021-07-29 19:20:31"
    }, {
      "hotelName": "Jefferson City",
      "createdAt": "2021-12-17 08:02:53",
      "updatedAt": "2022-02-19 02:24:59"
    }, {
      "hotelName": "Karanganyar",
      "createdAt": "2021-12-26 23:25:55",
      "updatedAt": "2021-11-28 17:20:49"
    }, {
      "hotelName": "Kuršumlija",
      "createdAt": "2021-07-12 03:48:27",
      "updatedAt": "2021-10-10 01:46:54"
    }, {
      "hotelName": "Buenavista",
      "createdAt": "2021-06-26 10:38:21",
      "updatedAt": "2022-05-24 05:39:05"
    }, {
      "hotelName": "Sangallaya",
      "createdAt": "2021-11-06 04:16:08",
      "updatedAt": "2022-06-01 03:07:49"
    }, {
      "hotelName": "Pirca",
      "createdAt": "2021-10-19 07:12:24",
      "updatedAt": "2021-09-23 20:50:35"
    }, {
      "hotelName": "Cachachi",
      "createdAt": "2022-03-01 19:03:21",
      "updatedAt": "2021-08-04 00:33:02"
    }, {
      "hotelName": "Sinhyeon",
      "createdAt": "2021-08-16 14:31:25",
      "updatedAt": "2022-03-30 03:46:44"
    }, {
      "hotelName": "Shanghang",
      "createdAt": "2021-07-04 23:39:22",
      "updatedAt": "2021-09-17 02:47:42"
    }, {
      "hotelName": "Baimiao",
      "createdAt": "2022-01-17 07:50:07",
      "updatedAt": "2021-10-05 23:42:49"
    }], 
    {});
  
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('hotel', null, {});
     
  }
};
