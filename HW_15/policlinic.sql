-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 25 2022 г., 21:58
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `policlinic`
--

-- --------------------------------------------------------

--
-- Структура таблицы `departament`
--

CREATE TABLE `departament` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `departament`
--

INSERT INTO `departament` (`ID`, `NAME`) VALUES
(1, 'Регистратура'),
(2, 'Отделение профилактики'),
(3, 'Отделение травмохирургическое'),
(4, 'Отделение медицинской реабилитации'),
(5, 'Клинико - диагностическая лаборатория'),
(6, 'Отделение функциональной диагностики'),
(7, 'Бухгалтерия'),
(8, 'АУП'),
(9, 'Отделение эндоскопическое'),
(10, '1-е отделение общей практики'),
(11, '2-е отделение общей практики'),
(12, '3-е отделение общей практики');

-- --------------------------------------------------------

--
-- Структура таблицы `med_cards`
--

CREATE TABLE `med_cards` (
  `ID` int(11) NOT NULL,
  `ID_PATIENTS` int(11) NOT NULL,
  `ID_STAFF` int(11) NOT NULL,
  `DATA_VISIT` date NOT NULL,
  `TIME_VISIT` time NOT NULL,
  `COMPLAINTS` varchar(250) NOT NULL,
  `WAS_DONE` varchar(300) NOT NULL,
  `DIAGNOSIS` varchar(250) NOT NULL,
  `RECOMM` varchar(300) NOT NULL,
  `COMM` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `paid_serveces`
--

CREATE TABLE `paid_serveces` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `PRICE` decimal(6,2) NOT NULL,
  `CURRENCY` char(3) NOT NULL,
  `COMM` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `patients`
--

CREATE TABLE `patients` (
  `ID` int(11) NOT NULL,
  `ID_REGION` int(11) NOT NULL,
  `LAST_NAME` varchar(100) NOT NULL,
  `FIRST_NAME` varchar(45) NOT NULL,
  `PATRONYMIC` varchar(45) DEFAULT NULL,
  `DATE_BIRTH` date NOT NULL,
  `PASS_NUMBER` varchar(45) NOT NULL,
  `CITY` varchar(20) NOT NULL,
  `STREET` varchar(45) NOT NULL,
  `HOUSE` smallint(6) NOT NULL,
  `HOUSING` smallint(6) DEFAULT NULL,
  `FLAT` smallint(6) NOT NULL,
  `PHONE_HOME` varchar(20) DEFAULT NULL,
  `PHONE_MOBILE` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `patients`
--

INSERT INTO `patients` (`ID`, `ID_REGION`, `LAST_NAME`, `FIRST_NAME`, `PATRONYMIC`, `DATE_BIRTH`, `PASS_NUMBER`, `CITY`, `STREET`, `HOUSE`, `HOUSING`, `FLAT`, `PHONE_HOME`, `PHONE_MOBILE`) VALUES
(1, 1, 'Король', 'Мария', 'Викторовна', '1987-01-12', 'МР1234567', 'Минск', 'Каменогорская', 62, 0, 25, NULL, '+375291234567'),
(4, 2, 'Бельский ', 'Денис', 'Викторович', '0197-05-02', 'МР7896541', 'Минск', 'Каменогорская', 100, 0, 56, NULL, '0'),
(5, 3, 'Суржик', 'Ольга', 'Леонидовна', '1983-06-09', 'МР4561236', 'Минск', 'Неманская', 12, 0, 10, NULL, NULL),
(6, 1, 'Бако ', 'Светлана', 'Леонидовна', '1981-12-30', 'МР7895123', 'Минск', 'Гаруна', 1, 0, 5, NULL, NULL),
(7, 1, 'Наумова', 'Светлана', 'Юрьевна', '1983-08-09', 'МР1478529', 'Минск', 'Гаруна', 8, 0, 56, NULL, NULL),
(8, 2, 'Петров', 'Петр', 'Петрович', '1990-02-25', 'МР8523698', 'Минск', 'Гаруна ', 18, 0, 2, NULL, NULL),
(9, 2, 'Сидоров', 'Андрей', 'Владимирович', '1953-03-15', 'МР3698541', 'Минск', 'Каменогорская', 92, 0, 16, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `profession`
--

CREATE TABLE `profession` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `profession`
--

INSERT INTO `profession` (`ID`, `NAME`) VALUES
(1, 'Главный врач'),
(2, 'Главный бухгалтер'),
(3, 'Медицинский регистратор'),
(4, 'Медицинская сестра'),
(5, 'Врач общей практики'),
(6, 'Врач - травматолог'),
(7, 'Врач - реабилитолог'),
(8, 'Врач лабораторной диагностики'),
(9, 'Врач - терапевт'),
(10, 'Врач - эндоскопист');

-- --------------------------------------------------------

--
-- Структура таблицы `records_paid_serveces`
--

CREATE TABLE `records_paid_serveces` (
  `ID` int(11) NOT NULL,
  `ID_WORK_SCHEDULE` int(11) NOT NULL,
  `ID_PATIENTS` int(11) NOT NULL,
  `ID_PAID_SERVECES` int(11) NOT NULL,
  `COMM` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `record_patients`
--

CREATE TABLE `record_patients` (
  `ID` int(11) NOT NULL,
  `ID_WORK_SCHEDULE` int(11) NOT NULL,
  `ID_PATIENTS` int(11) NOT NULL,
  `TIME_VISIT` time NOT NULL,
  `COMM` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `record_patients`
--

INSERT INTO `record_patients` (`ID`, `ID_WORK_SCHEDULE`, `ID_PATIENTS`, `TIME_VISIT`, `COMM`) VALUES
(1, 1, 1, '09:00:00', 'ок'),
(2, 3, 6, '14:30:00', 'ок'),
(3, 2, 7, '10:00:00', 'ок'),
(4, 6, 5, '12:00:00', 'ок'),
(5, 5, 4, '11:00:00', 'ок'),
(6, 2, 8, '11:30:00', 'ок');

-- --------------------------------------------------------

--
-- Структура таблицы `region`
--

CREATE TABLE `region` (
  `ID` int(11) NOT NULL,
  `ID_STAFF` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL,
  `ADDRESSES` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `region`
--

INSERT INTO `region` (`ID`, `ID_STAFF`, `NAME`, `ADDRESSES`) VALUES
(1, 7, '1 участок', 'ул. Гаруна д.1, 6, 8, 12, 16, 18, 20, 22, 23, 24, 25, 26, 28, 30'),
(2, 8, '3 участок', 'ул. Каменогорская д. 60, 62, 72, 74, 78, 80, 82'),
(3, 9, '2 участок', 'ул. Каменогорская д. 84, 86, 88, 90, 92, 94, 96, 100, 102, 104, 108, 110, 112, 116');

-- --------------------------------------------------------

--
-- Структура таблицы `shift`
--

CREATE TABLE `shift` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `TIME_BEGIN` time DEFAULT NULL,
  `TIME_END` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `shift`
--

INSERT INTO `shift` (`ID`, `NAME`, `TIME_BEGIN`, `TIME_END`) VALUES
(1, 'Первая смена', '08:00:00', '14:00:00'),
(2, 'Вторая смена', '08:00:00', '14:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `staff`
--

CREATE TABLE `staff` (
  `ID` int(11) NOT NULL,
  `ID_PROFESSION` int(11) NOT NULL,
  `ID_DEPARTAMENT` int(11) NOT NULL,
  `LAST_NAME` varchar(100) NOT NULL,
  `FIRST_NAME` varchar(45) NOT NULL,
  `PATRONYMIC` varchar(45) NOT NULL,
  `DATE_BIRTH` date NOT NULL,
  `DATE_EMPLOYMENT` date NOT NULL,
  `START_EMPLOYMENT` date NOT NULL,
  `EDUCATION` varchar(45) NOT NULL,
  `EDU_INSTITUTION` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `staff`
--

INSERT INTO `staff` (`ID`, `ID_PROFESSION`, `ID_DEPARTAMENT`, `LAST_NAME`, `FIRST_NAME`, `PATRONYMIC`, `DATE_BIRTH`, `DATE_EMPLOYMENT`, `START_EMPLOYMENT`, `EDUCATION`, `EDU_INSTITUTION`) VALUES
(1, 1, 8, 'Горюнов', 'Алексей', 'Валерьевич', '1950-10-04', '2000-07-05', '1975-09-01', 'Высшее', 'БГМУ'),
(2, 2, 8, 'Пыж', 'Наталья', 'Константиновна', '1960-11-14', '2011-07-05', '1980-09-10', 'Высшее', 'БГУ'),
(3, 3, 1, 'Шикасюк', 'Татьяна', 'Николаевна', '1973-01-14', '2010-08-15', '1990-05-01', 'среднее специальное', 'ВГМК'),
(4, 8, 5, 'Кравченко', 'Елена', 'Леонидовна', '1978-04-24', '2010-08-15', '1998-09-01', 'среднее специальное', 'ВГМК'),
(5, 4, 5, 'Кайрис', 'Галина', 'Евгеньевна', '1990-05-25', '2019-08-15', '2019-08-15', 'среднее специальное', 'БГМК'),
(6, 10, 9, 'Празецкий', 'Вячеслав', 'Александрович', '1977-08-02', '2019-08-15', '1997-08-15', 'Высшее', 'БГМУ'),
(7, 5, 10, 'Козловская', 'Татьяна', 'Александровна', '1985-08-02', '2005-08-15', '2005-06-24', 'Высшее', 'ВГМУ'),
(8, 5, 11, 'Юргенс', 'Юлия', 'Грирорьевна', '1983-09-08', '2005-08-15', '2003-06-24', 'Высшее', 'ВГМУ'),
(9, 5, 12, 'Иванов', 'Иван', 'Иванович', '1965-11-11', '2000-10-25', '1982-06-23', 'Высшее', 'БГМУ');

-- --------------------------------------------------------

--
-- Структура таблицы `taking_tests`
--

CREATE TABLE `taking_tests` (
  `ID` int(11) NOT NULL,
  `ID_PATIENTS` int(11) NOT NULL,
  `ID_STAFF` int(11) NOT NULL,
  `DATE_VISIT` date NOT NULL,
  `TEST` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `taking_tests`
--

INSERT INTO `taking_tests` (`ID`, `ID_PATIENTS`, `ID_STAFF`, `DATE_VISIT`, `TEST`) VALUES
(1, 1, 4, '2022-07-13', NULL),
(2, 4, 5, '2022-07-15', NULL),
(3, 5, 6, '2022-04-05', NULL),
(4, 6, 5, '2022-07-07', NULL),
(6, 6, 4, '2022-07-08', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `tests`
--

CREATE TABLE `tests` (
  `ID` int(11) NOT NULL,
  `ID_TYPE_OF_TESTS` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `tests`
--

INSERT INTO `tests` (`ID`, `ID_TYPE_OF_TESTS`, `NAME`) VALUES
(1, 1, 'Электролечение'),
(2, 1, 'Ингаляции лекарственные'),
(3, 2, 'Общий анализ капиллярной крови'),
(4, 2, 'Общий анализ мощи'),
(5, 2, 'Общий анализ венозной крови'),
(6, 4, 'УЗИ органов брюшной полости'),
(7, 4, 'УЗИ щитовидной железы'),
(8, 7, 'Экспресс - тест на наличие антитек к COVID19 '),
(9, 3, 'Эзофагогастродуоденоскопия'),
(10, 5, 'Первичный приём врачом общей практики'),
(11, 5, 'Повторный приём врачом общей практики'),
(12, 6, 'Осмотр врачом - хирургом'),
(13, 6, 'Осмотр врачом - терапевтом');

-- --------------------------------------------------------

--
-- Структура таблицы `type_of_tests`
--

CREATE TABLE `type_of_tests` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `type_of_tests`
--

INSERT INTO `type_of_tests` (`ID`, `NAME`) VALUES
(1, 'Физиотерапия'),
(2, 'Лабораторная диагностика'),
(3, 'Эндоскопия'),
(4, 'Ультрозвуковая диагностика'),
(5, 'Прием врачей - специалистов'),
(6, 'Профилактические осмотры и медицинские освиде'),
(7, 'Экспресс - тест на наличие антител к COVID-19'),
(8, 'Хирургические услуги');

-- --------------------------------------------------------

--
-- Структура таблицы `vacation`
--

CREATE TABLE `vacation` (
  `ID` int(11) NOT NULL,
  `ID_STAFF` int(11) NOT NULL,
  `DATE_BEG` date NOT NULL,
  `DATE_END` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `vacation`
--

INSERT INTO `vacation` (`ID`, `ID_STAFF`, `DATE_BEG`, `DATE_END`) VALUES
(1, 6, '2022-05-01', '2022-05-19'),
(2, 7, '2022-06-01', '2022-06-19'),
(3, 8, '2022-04-01', '2022-04-14'),
(4, 3, '2022-07-01', '2022-07-19'),
(6, 8, '2022-08-14', '2022-08-31');

-- --------------------------------------------------------

--
-- Структура таблицы `vaccinates`
--

CREATE TABLE `vaccinates` (
  `ID` int(11) NOT NULL,
  `ID_VACCINATIONS` int(11) NOT NULL,
  `ID_PATIENTS` int(11) NOT NULL,
  `ID_STAFF` int(11) NOT NULL,
  `DATE_VISIT` date NOT NULL,
  `TIME_VISIT` time NOT NULL,
  `OFFICE` varchar(10) NOT NULL,
  `COMM` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `vaccinates`
--

INSERT INTO `vaccinates` (`ID`, `ID_VACCINATIONS`, `ID_PATIENTS`, `ID_STAFF`, `DATE_VISIT`, `TIME_VISIT`, `OFFICE`, `COMM`) VALUES
(6, 1, 5, 3, '2022-07-05', '08:30:00', '109', 'ок'),
(7, 3, 6, 3, '2021-04-14', '14:40:00', '109', 'ок'),
(8, 4, 7, 3, '2022-05-26', '15:25:00', '109', 'ок'),
(10, 1, 4, 3, '2022-02-14', '09:10:00', '109', 'ок');

-- --------------------------------------------------------

--
-- Структура таблицы `vaccinations`
--

CREATE TABLE `vaccinations` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL,
  `VACCINE` varchar(45) NOT NULL,
  `MAKER` varchar(45) NOT NULL,
  `COUNTRY` varchar(45) NOT NULL,
  `DATE_EXPIRY` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `vaccinations`
--

INSERT INTO `vaccinations` (`ID`, `NAME`, `VACCINE`, `MAKER`, `COUNTRY`, `DATE_EXPIRY`) VALUES
(1, 'Вирусный гепатит В', 'Регевак', 'Биннофарм', 'Россия', '2023-07-26'),
(2, 'Туберкулез (БЦЖ-М)', 'вакцина БЦЖ-М', 'МикроГен', 'Россия', '2024-07-27'),
(3, 'АКДС (дифтерия, столбняк, коклюш)', 'КОМБИОТЕХ', 'ЗАО \"Научно - практическая компания\"', 'Россия', '2024-03-04'),
(4, 'ХИБ (гемофильной инфекции)', 'АКТ - ХИБ', 'Санофи Авентис', 'Словения', '2023-07-27'),
(5, 'АД-М (дифтерия)', 'Анатоксин', 'МикроГен', 'Россия', '2025-07-26');

-- --------------------------------------------------------

--
-- Структура таблицы `work_schedule`
--

CREATE TABLE `work_schedule` (
  `ID` int(11) NOT NULL,
  `ID_STAFF` int(11) NOT NULL,
  `ID_SHIFT` int(11) NOT NULL,
  `DATE_V` date NOT NULL,
  `OFFICE` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `work_schedule`
--

INSERT INTO `work_schedule` (`ID`, `ID_STAFF`, `ID_SHIFT`, `DATE_V`, `OFFICE`) VALUES
(1, 5, 2, '2022-07-17', '101'),
(2, 5, 1, '2022-07-18', '101'),
(3, 5, 2, '2022-07-19', '101'),
(4, 5, 1, '2022-07-20', '101'),
(5, 6, 1, '2022-07-17', '210'),
(6, 6, 2, '2022-07-18', '210'),
(7, 6, 1, '2022-07-19', '210'),
(8, 6, 2, '2022-07-20', '210'),
(9, 7, 1, '2022-07-18', '305'),
(10, 8, 1, '2022-07-20', '406'),
(11, 9, 2, '2022-07-20', '410'),
(12, 9, 1, '2022-07-21', '410');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `departament`
--
ALTER TABLE `departament`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `med_cards`
--
ALTER TABLE `med_cards`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_MED_CARDS_1` (`ID_PATIENTS`),
  ADD KEY `FK_MED_CARDS_2` (`ID_STAFF`);

--
-- Индексы таблицы `paid_serveces`
--
ALTER TABLE `paid_serveces`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_PATIENTS_1` (`ID_REGION`);

--
-- Индексы таблицы `profession`
--
ALTER TABLE `profession`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `records_paid_serveces`
--
ALTER TABLE `records_paid_serveces`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_RECORDS_PAID_SERVECES_1` (`ID_WORK_SCHEDULE`),
  ADD KEY `FK_RECORDS_PAID_SERVECES_2` (`ID_PATIENTS`),
  ADD KEY `FK_RECORDS_PAID_SERVECES_3` (`ID_PAID_SERVECES`);

--
-- Индексы таблицы `record_patients`
--
ALTER TABLE `record_patients`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_RECORD_PATIENTS_1` (`ID_WORK_SCHEDULE`),
  ADD KEY `FK_RECORD_PATIENTS_2` (`ID_PATIENTS`);

--
-- Индексы таблицы `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_REGION_1` (`ID_STAFF`);

--
-- Индексы таблицы `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_STAFF_1` (`ID_PROFESSION`),
  ADD KEY `FK_STAFF_2` (`ID_DEPARTAMENT`);

--
-- Индексы таблицы `taking_tests`
--
ALTER TABLE `taking_tests`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_TAKING_TESTS_1` (`ID_PATIENTS`),
  ADD KEY `FK_TAKING_TESTS_2` (`ID_STAFF`);

--
-- Индексы таблицы `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_TESTS_1` (`ID_TYPE_OF_TESTS`);

--
-- Индексы таблицы `type_of_tests`
--
ALTER TABLE `type_of_tests`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `vacation`
--
ALTER TABLE `vacation`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_VACATION_1` (`ID_STAFF`);

--
-- Индексы таблицы `vaccinates`
--
ALTER TABLE `vaccinates`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_VACCINATES_1` (`ID_VACCINATIONS`),
  ADD KEY `FK_VACCINATES_2` (`ID_PATIENTS`),
  ADD KEY `FK_VACCINATES_3` (`ID_STAFF`);

--
-- Индексы таблицы `vaccinations`
--
ALTER TABLE `vaccinations`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `work_schedule`
--
ALTER TABLE `work_schedule`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_WORK_SCHEDULE_1` (`ID_STAFF`),
  ADD KEY `FK_WORK_SCHEDULE_2` (`ID_SHIFT`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `departament`
--
ALTER TABLE `departament`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `med_cards`
--
ALTER TABLE `med_cards`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `paid_serveces`
--
ALTER TABLE `paid_serveces`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `patients`
--
ALTER TABLE `patients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `profession`
--
ALTER TABLE `profession`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `records_paid_serveces`
--
ALTER TABLE `records_paid_serveces`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `record_patients`
--
ALTER TABLE `record_patients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `region`
--
ALTER TABLE `region`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `shift`
--
ALTER TABLE `shift`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `staff`
--
ALTER TABLE `staff`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `taking_tests`
--
ALTER TABLE `taking_tests`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `tests`
--
ALTER TABLE `tests`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `type_of_tests`
--
ALTER TABLE `type_of_tests`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `vacation`
--
ALTER TABLE `vacation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `vaccinates`
--
ALTER TABLE `vaccinates`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `vaccinations`
--
ALTER TABLE `vaccinations`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `work_schedule`
--
ALTER TABLE `work_schedule`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `med_cards`
--
ALTER TABLE `med_cards`
  ADD CONSTRAINT `FK_MED_CARDS_1` FOREIGN KEY (`ID_PATIENTS`) REFERENCES `patients` (`ID`),
  ADD CONSTRAINT `FK_MED_CARDS_2` FOREIGN KEY (`ID_STAFF`) REFERENCES `staff` (`ID`);

--
-- Ограничения внешнего ключа таблицы `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `FK_PATIENTS_1` FOREIGN KEY (`ID_REGION`) REFERENCES `region` (`ID`);

--
-- Ограничения внешнего ключа таблицы `records_paid_serveces`
--
ALTER TABLE `records_paid_serveces`
  ADD CONSTRAINT `FK_RECORDS_PAID_SERVECES_1` FOREIGN KEY (`ID_WORK_SCHEDULE`) REFERENCES `work_schedule` (`ID`),
  ADD CONSTRAINT `FK_RECORDS_PAID_SERVECES_2` FOREIGN KEY (`ID_PATIENTS`) REFERENCES `patients` (`ID`),
  ADD CONSTRAINT `FK_RECORDS_PAID_SERVECES_3` FOREIGN KEY (`ID_PAID_SERVECES`) REFERENCES `paid_serveces` (`ID`);

--
-- Ограничения внешнего ключа таблицы `record_patients`
--
ALTER TABLE `record_patients`
  ADD CONSTRAINT `FK_RECORD_PATIENTS_1` FOREIGN KEY (`ID_WORK_SCHEDULE`) REFERENCES `work_schedule` (`ID`),
  ADD CONSTRAINT `FK_RECORD_PATIENTS_2` FOREIGN KEY (`ID_PATIENTS`) REFERENCES `patients` (`ID`);

--
-- Ограничения внешнего ключа таблицы `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `FK_REGION_1` FOREIGN KEY (`ID_STAFF`) REFERENCES `staff` (`ID`);

--
-- Ограничения внешнего ключа таблицы `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `FK_STAFF_1` FOREIGN KEY (`ID_PROFESSION`) REFERENCES `profession` (`ID`),
  ADD CONSTRAINT `FK_STAFF_2` FOREIGN KEY (`ID_DEPARTAMENT`) REFERENCES `departament` (`ID`);

--
-- Ограничения внешнего ключа таблицы `taking_tests`
--
ALTER TABLE `taking_tests`
  ADD CONSTRAINT `FK_TAKING_TESTS_1` FOREIGN KEY (`ID_PATIENTS`) REFERENCES `patients` (`ID`),
  ADD CONSTRAINT `FK_TAKING_TESTS_2` FOREIGN KEY (`ID_STAFF`) REFERENCES `staff` (`ID`);

--
-- Ограничения внешнего ключа таблицы `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `FK_TESTS_1` FOREIGN KEY (`ID_TYPE_OF_TESTS`) REFERENCES `type_of_tests` (`ID`);

--
-- Ограничения внешнего ключа таблицы `vacation`
--
ALTER TABLE `vacation`
  ADD CONSTRAINT `FK_VACATION_1` FOREIGN KEY (`ID_STAFF`) REFERENCES `staff` (`ID`);

--
-- Ограничения внешнего ключа таблицы `vaccinates`
--
ALTER TABLE `vaccinates`
  ADD CONSTRAINT `FK_VACCINATES_1` FOREIGN KEY (`ID_VACCINATIONS`) REFERENCES `vaccinations` (`ID`),
  ADD CONSTRAINT `FK_VACCINATES_2` FOREIGN KEY (`ID_PATIENTS`) REFERENCES `patients` (`ID`),
  ADD CONSTRAINT `FK_VACCINATES_3` FOREIGN KEY (`ID_STAFF`) REFERENCES `staff` (`ID`);

--
-- Ограничения внешнего ключа таблицы `work_schedule`
--
ALTER TABLE `work_schedule`
  ADD CONSTRAINT `FK_WORK_SCHEDULE_1` FOREIGN KEY (`ID_STAFF`) REFERENCES `staff` (`ID`),
  ADD CONSTRAINT `FK_WORK_SCHEDULE_2` FOREIGN KEY (`ID_SHIFT`) REFERENCES `shift` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
