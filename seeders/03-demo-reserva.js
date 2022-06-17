'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('reserva', [{
      "fechaEntrada": "2021-11-17 06:24:18",
      "fechaSalida": "2022-05-02 16:24:30",
      "importe": 369,
      "createdAt": "2022-06-06 22:20:14",
      "updatedAt": "2021-06-16 11:26:59"
    }, {
      "fechaEntrada": "2021-12-11 05:18:23",
      "fechaSalida": "2022-04-16 23:35:18",
      "importe": 210,
      "createdAt": "2022-03-23 18:44:10",
      "updatedAt": "2022-03-16 23:51:31"
    }, {
      "fechaEntrada": "2021-08-28 15:53:51",
      "fechaSalida": "2021-10-04 17:48:11",
      "importe": 118,
      "createdAt": "2022-02-17 22:06:56",
      "updatedAt": "2022-04-17 20:15:47"
    }, {
      "fechaEntrada": "2022-06-07 03:09:46",
      "fechaSalida": "2021-07-01 11:15:09",
      "importe": 418,
      "createdAt": "2021-10-01 17:10:41",
      "updatedAt": "2022-01-26 04:49:54"
    }, {
      "fechaEntrada": "2022-01-18 15:42:28",
      "fechaSalida": "2021-09-16 01:13:10",
      "importe": 379,
      "createdAt": "2022-05-02 20:18:00",
      "updatedAt": "2022-05-30 00:23:31"
    }, {
      "fechaEntrada": "2022-03-03 03:54:27",
      "fechaSalida": "2022-01-04 03:07:37",
      "importe": 388,
      "createdAt": "2021-11-17 18:23:32",
      "updatedAt": "2021-10-30 06:24:40"
    }, {
      "fechaEntrada": "2022-01-16 12:22:47",
      "fechaSalida": "2021-08-20 08:46:04",
      "importe": 380,
      "createdAt": "2022-03-19 02:17:39",
      "updatedAt": "2021-09-21 15:46:45"
    }, {
      "fechaEntrada": "2021-09-08 18:30:08",
      "fechaSalida": "2022-01-24 11:00:10",
      "importe": 401,
      "createdAt": "2022-01-18 11:32:45",
      "updatedAt": "2021-09-06 05:02:58"
    }, {
      "fechaEntrada": "2021-12-09 14:08:15",
      "fechaSalida": "2021-07-01 01:44:39",
      "importe": 344,
      "createdAt": "2022-04-04 04:26:17",
      "updatedAt": "2021-11-29 15:03:33"
    }, {
      "fechaEntrada": "2022-03-23 12:57:26",
      "fechaSalida": "2021-12-18 12:33:12",
      "importe": 203,
      "createdAt": "2022-04-03 23:11:27",
      "updatedAt": "2021-06-19 17:54:42"
    }, {
      "fechaEntrada": "2021-09-19 01:21:28",
      "fechaSalida": "2021-08-19 02:11:30",
      "importe": 138,
      "createdAt": "2021-12-14 23:29:29",
      "updatedAt": "2022-04-10 12:05:28"
    }, {
      "fechaEntrada": "2022-06-14 15:24:40",
      "fechaSalida": "2022-01-17 02:25:39",
      "importe": 423,
      "createdAt": "2022-01-31 09:04:20",
      "updatedAt": "2022-02-02 23:07:19"
    }, {
      "fechaEntrada": "2022-01-03 01:41:31",
      "fechaSalida": "2022-06-05 22:08:48",
      "importe": 308,
      "createdAt": "2021-10-09 21:59:33",
      "updatedAt": "2022-03-11 21:08:09"
    }, {
      "fechaEntrada": "2021-07-06 18:30:59",
      "fechaSalida": "2021-08-06 10:21:15",
      "importe": 279,
      "createdAt": "2021-08-07 07:41:44",
      "updatedAt": "2022-06-08 11:31:33"
    }, {
      "fechaEntrada": "2022-03-06 13:39:12",
      "fechaSalida": "2021-08-21 18:14:17",
      "importe": 320,
      "createdAt": "2021-06-17 15:15:50",
      "updatedAt": "2022-02-28 20:00:53"
    }, {
      "fechaEntrada": "2022-05-20 21:23:27",
      "fechaSalida": "2021-12-08 02:32:15",
      "importe": 299,
      "createdAt": "2022-06-07 04:43:53",
      "updatedAt": "2022-01-02 08:10:42"
    }, {
      "fechaEntrada": "2021-12-30 09:34:47",
      "fechaSalida": "2021-12-22 21:54:32",
      "importe": 389,
      "createdAt": "2021-12-11 23:02:55",
      "updatedAt": "2022-04-11 08:05:10"
    }, {
      "fechaEntrada": "2021-08-11 14:56:09",
      "fechaSalida": "2021-07-28 00:58:03",
      "importe": 100,
      "createdAt": "2022-06-08 02:00:46",
      "updatedAt": "2021-09-17 15:28:19"
    }, {
      "fechaEntrada": "2022-02-24 14:29:06",
      "fechaSalida": "2021-08-25 15:57:33",
      "importe": 402,
      "createdAt": "2021-08-07 16:32:16",
      "updatedAt": "2021-09-22 05:58:20"
    }, {
      "fechaEntrada": "2021-08-19 15:02:40",
      "fechaSalida": "2022-05-27 03:09:22",
      "importe": 350,
      "createdAt": "2022-03-08 06:41:33",
      "updatedAt": "2021-10-30 01:05:32"
    }, {
      "fechaEntrada": "2022-01-01 02:14:19",
      "fechaSalida": "2021-10-02 10:19:19",
      "importe": 458,
      "createdAt": "2021-07-17 14:29:43",
      "updatedAt": "2022-06-06 13:40:28"
    }, {
      "fechaEntrada": "2022-03-20 22:42:53",
      "fechaSalida": "2021-11-29 21:34:35",
      "importe": 209,
      "createdAt": "2021-11-12 16:33:38",
      "updatedAt": "2021-07-19 10:10:50"
    }, {
      "fechaEntrada": "2021-06-29 14:58:52",
      "fechaSalida": "2021-10-05 19:36:56",
      "importe": 193,
      "createdAt": "2021-07-20 12:05:27",
      "updatedAt": "2021-10-03 14:33:58"
    }, {
      "fechaEntrada": "2022-02-08 11:10:05",
      "fechaSalida": "2021-12-10 08:47:11",
      "importe": 293,
      "createdAt": "2021-07-16 04:45:21",
      "updatedAt": "2021-10-28 16:01:07"
    }, {
      "fechaEntrada": "2022-02-14 08:13:37",
      "fechaSalida": "2021-07-13 20:20:59",
      "importe": 323,
      "createdAt": "2021-10-12 16:34:49",
      "updatedAt": "2021-12-02 12:33:05"
    }, {
      "fechaEntrada": "2022-05-11 11:35:19",
      "fechaSalida": "2022-03-31 05:00:29",
      "importe": 187,
      "createdAt": "2021-11-04 03:24:56",
      "updatedAt": "2021-10-08 14:32:38"
    }, {
      "fechaEntrada": "2021-11-07 21:09:53",
      "fechaSalida": "2021-08-22 00:27:53",
      "importe": 341,
      "createdAt": "2021-10-27 13:14:50",
      "updatedAt": "2022-02-28 03:57:52"
    }, {
      "fechaEntrada": "2021-10-09 22:12:10",
      "fechaSalida": "2022-02-06 04:43:24",
      "importe": 174,
      "createdAt": "2022-03-10 13:40:29",
      "updatedAt": "2022-03-05 00:52:27"
    }, {
      "fechaEntrada": "2021-09-11 22:22:36",
      "fechaSalida": "2021-11-07 00:26:05",
      "importe": 53,
      "createdAt": "2022-05-07 12:20:05",
      "updatedAt": "2022-03-08 11:55:28"
    }, {
      "fechaEntrada": "2021-10-12 18:30:12",
      "fechaSalida": "2022-04-01 07:14:21",
      "importe": 217,
      "createdAt": "2021-10-30 19:18:27",
      "updatedAt": "2021-08-30 13:14:41"
    }, {
      "fechaEntrada": "2022-06-02 06:06:47",
      "fechaSalida": "2022-03-22 13:15:30",
      "importe": 288,
      "createdAt": "2021-07-30 14:23:51",
      "updatedAt": "2022-01-22 09:32:44"
    }, {
      "fechaEntrada": "2022-02-15 19:08:18",
      "fechaSalida": "2021-12-08 13:05:12",
      "importe": 323,
      "createdAt": "2022-03-14 02:01:42",
      "updatedAt": "2022-05-11 15:19:51"
    }, {
      "fechaEntrada": "2022-03-30 04:20:40",
      "fechaSalida": "2021-12-13 08:30:13",
      "importe": 470,
      "createdAt": "2021-11-18 14:56:09",
      "updatedAt": "2021-07-27 22:59:29"
    }, {
      "fechaEntrada": "2021-10-22 18:53:28",
      "fechaSalida": "2022-01-13 11:14:15",
      "importe": 182,
      "createdAt": "2022-05-25 21:17:34",
      "updatedAt": "2022-03-15 02:15:14"
    }, {
      "fechaEntrada": "2021-10-08 01:58:19",
      "fechaSalida": "2021-07-02 16:36:27",
      "importe": 189,
      "createdAt": "2021-09-07 04:00:46",
      "updatedAt": "2021-08-07 21:50:57"
    }, {
      "fechaEntrada": "2022-01-10 15:53:00",
      "fechaSalida": "2021-07-10 05:09:11",
      "importe": 313,
      "createdAt": "2021-09-07 10:26:11",
      "updatedAt": "2022-01-09 04:30:12"
    }, {
      "fechaEntrada": "2021-12-18 23:50:00",
      "fechaSalida": "2022-02-11 15:33:13",
      "importe": 84,
      "createdAt": "2021-11-03 04:55:54",
      "updatedAt": "2022-01-07 16:08:24"
    }, {
      "fechaEntrada": "2021-07-30 18:56:41",
      "fechaSalida": "2022-06-15 03:37:29",
      "importe": 469,
      "createdAt": "2021-08-02 02:40:52",
      "updatedAt": "2022-01-08 09:20:44"
    }, {
      "fechaEntrada": "2022-05-12 01:20:05",
      "fechaSalida": "2022-02-26 14:59:51",
      "importe": 349,
      "createdAt": "2021-12-16 06:48:22",
      "updatedAt": "2021-12-26 00:48:17"
    }, {
      "fechaEntrada": "2021-07-10 16:20:11",
      "fechaSalida": "2021-10-13 01:42:08",
      "importe": 260,
      "createdAt": "2021-12-03 07:27:55",
      "updatedAt": "2021-09-14 03:43:20"
    }, {
      "fechaEntrada": "2021-11-29 13:42:46",
      "fechaSalida": "2022-03-08 15:43:39",
      "importe": 293,
      "createdAt": "2022-06-02 03:14:20",
      "updatedAt": "2022-06-09 23:02:54"
    }, {
      "fechaEntrada": "2022-05-03 07:31:04",
      "fechaSalida": "2021-11-16 06:10:03",
      "importe": 425,
      "createdAt": "2022-04-16 22:36:31",
      "updatedAt": "2022-01-27 21:39:30"
    }, {
      "fechaEntrada": "2021-08-04 09:54:04",
      "fechaSalida": "2022-03-25 12:02:22",
      "importe": 265,
      "createdAt": "2021-11-15 19:43:20",
      "updatedAt": "2021-08-24 10:43:39"
    }, {
      "fechaEntrada": "2021-10-30 19:18:17",
      "fechaSalida": "2021-08-30 07:49:02",
      "importe": 263,
      "createdAt": "2021-09-07 20:54:32",
      "updatedAt": "2021-11-12 00:34:47"
    }, {
      "fechaEntrada": "2021-11-22 07:42:48",
      "fechaSalida": "2021-08-18 22:35:29",
      "importe": 344,
      "createdAt": "2021-07-23 14:26:10",
      "updatedAt": "2022-04-26 09:43:41"
    }, {
      "fechaEntrada": "2021-06-27 03:29:40",
      "fechaSalida": "2021-08-03 02:33:09",
      "importe": 340,
      "createdAt": "2021-07-04 06:14:54",
      "updatedAt": "2022-05-28 14:38:59"
    }, {
      "fechaEntrada": "2021-11-05 16:21:31",
      "fechaSalida": "2022-02-22 10:34:08",
      "importe": 445,
      "createdAt": "2022-06-15 14:12:11",
      "updatedAt": "2022-05-08 20:09:13"
    }, {
      "fechaEntrada": "2021-12-11 20:41:48",
      "fechaSalida": "2022-05-04 02:05:34",
      "importe": 463,
      "createdAt": "2022-01-25 22:13:38",
      "updatedAt": "2021-09-04 21:26:21"
    }, {
      "fechaEntrada": "2021-07-19 17:14:40",
      "fechaSalida": "2021-08-26 12:16:21",
      "importe": 475,
      "createdAt": "2022-04-20 14:10:23",
      "updatedAt": "2021-07-02 08:39:05"
    }, {
      "fechaEntrada": "2021-10-08 17:45:16",
      "fechaSalida": "2021-11-04 15:10:01",
      "importe": 200,
      "createdAt": "2021-08-26 10:00:44",
      "updatedAt": "2021-11-14 14:35:24"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('reserva', null, {});

  }
};
