-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 20 2022 г., 22:59
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
-- База данных: `tourism_company`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `cities`
--

INSERT INTO `cities` (`id`, `name`, `country_id`) VALUES
(1, 'Antalya', 1),
(2, 'Hurghada', 2),
(3, 'Dubai', 3),
(4, 'Budva', 4),
(5, 'Male', 5),
(6, 'Batumi', 6);

-- --------------------------------------------------------

--
-- Структура таблицы `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `countries`
--

INSERT INTO `countries` (`id`, `name`) VALUES
(1, 'Turkey'),
(2, 'Egypt'),
(3, 'UAE'),
(4, 'Montenegro'),
(5, 'Maldives'),
(6, 'Georgia');

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `passport_id` int(11) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `passport_id`, `phone`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Max', 'Shkurdziuk', 1, '123456789', 'max@gmail.com', '2022-07-20 23:29:46', NULL),
(2, 'Ivan', 'Ivanov', 2, '12345654789', 'ivan@gmail.com', '2022-07-20 23:29:46', NULL),
(3, 'Petr', 'Petrov', 3, '1254789', 'petr@gmail.com', '2022-07-20 23:29:46', NULL),
(4, 'Anastasiya', 'Ivanova', 4, '1234836', 'nastya@gmail.com', '2022-07-20 23:29:46', NULL),
(5, 'Anna', 'Sidorova', 5, '1237745789', 'anna@gmail.com', '2022-07-20 23:29:46', NULL),
(6, 'Vasiliy', 'Katrin', 6, '1345654789', 'vasya@gmail.com', '2022-07-20 23:29:46', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `customer_passports`
--

CREATE TABLE `customer_passports` (
  `passport_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `departments`
--

INSERT INTO `departments` (`id`, `name`, `description`) VALUES
(1, 'Manager', 'Tour sales'),
(2, 'Accountant', 'Salary calculating, tour paying'),
(3, 'Director', 'Main management'),
(4, 'SEO', 'Advertisent specialist'),
(5, 'Cleaner', 'Office clean'),
(6, 'Booking', 'Booking tours');

-- --------------------------------------------------------

--
-- Структура таблицы `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `passport_id` int(11) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `adress` varchar(225) NOT NULL,
  `email` varchar(100) NOT NULL,
  `department_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `passport_id`, `phone`, `adress`, `email`, `department_id`, `created_at`, `updated_at`) VALUES
(1, 'Max', 'Shkurdziuk', 1, '123456789', 'Minsk', 'max@gmail.com', 1, '2022-07-20 23:26:12', NULL),
(2, 'Ivan', 'Ivanov', 2, '12345654789', 'Minsk', 'ivan@gmail.com', 2, '2022-07-20 23:26:12', NULL),
(3, 'Petr', 'Petrov', 3, '1254789', 'Minsk', 'petr@gmail.com', 3, '2022-07-20 23:26:12', NULL),
(4, 'Anastasiya', 'Ivanova', 4, '1234836', 'Pinsk', 'nastya@gmail.com', 5, '2022-07-20 23:26:12', NULL),
(5, 'Anna', 'Sidorova', 5, '1237745789', 'Orsha', 'anna@gmail.com', 6, '2022-07-20 23:26:12', NULL),
(6, 'Vasiliy', 'Katrin', 6, '1345654789', 'Minsk', 'vasya@gmail.com', 1, '2022-07-20 23:26:12', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `employee_passports`
--

CREATE TABLE `employee_passports` (
  `employee_id` int(11) NOT NULL,
  `passport_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `flight_companies`
--

CREATE TABLE `flight_companies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `flight_companies`
--

INSERT INTO `flight_companies` (`id`, `name`) VALUES
(1, 'Belavia'),
(2, 'Aeroflot'),
(3, 'Fly Dubai'),
(4, 'Emirates'),
(5, 'Turkish Airlines');

-- --------------------------------------------------------

--
-- Структура таблицы `food_types`
--

CREATE TABLE `food_types` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `food_types`
--

INSERT INTO `food_types` (`id`, `name`) VALUES
(1, 'RO'),
(2, 'BB'),
(3, 'HB'),
(4, 'FB'),
(5, 'AI'),
(6, 'UAI');

-- --------------------------------------------------------

--
-- Структура таблицы `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `city_id`) VALUES
(1, 'Orfeus Park 4*', 1),
(2, 'TUI Blue 5*', 1),
(3, 'Radisson RAK 5*', 3),
(4, 'Adriatic Lux 4*', 4),
(5, 'Marani 3*', 6);

-- --------------------------------------------------------

--
-- Структура таблицы `hotel_food_types`
--

CREATE TABLE `hotel_food_types` (
  `food_type_id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `hotel_rooms`
--

CREATE TABLE `hotel_rooms` (
  `room_id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `passports`
--

CREATE TABLE `passports` (
  `id` int(11) NOT NULL,
  `passport_id` int(11) NOT NULL,
  `passport_num` int(11) NOT NULL,
  `issue_date` date NOT NULL,
  `expiration_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `passports`
--

INSERT INTO `passports` (`id`, `passport_id`, `passport_num`, `issue_date`, `expiration_date`) VALUES
(1, 1, 2683863, '2022-06-01', '2027-07-01'),
(2, 2, 83863683, '2021-07-01', '2027-07-01'),
(3, 3, 3863863, '2021-07-01', '2027-07-01'),
(4, 4, 6833683, '2021-07-01', '2027-07-01'),
(5, 5, 57283622, '2021-07-01', '2027-07-01'),
(6, 6, 78592422, '2021-07-01', '2027-07-01');

-- --------------------------------------------------------

--
-- Структура таблицы `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `rooms`
--

INSERT INTO `rooms` (`id`, `name`) VALUES
(1, 'Standard'),
(2, 'Superior'),
(3, 'Deluxe'),
(4, 'Family'),
(5, 'Suite'),
(6, 'Royal Suite');

-- --------------------------------------------------------

--
-- Структура таблицы `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `sale_date` datetime NOT NULL DEFAULT current_timestamp(),
  `employee_id` int(11) NOT NULL,
  `tour_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `sales`
--

INSERT INTO `sales` (`id`, `sale_date`, `employee_id`, `tour_id`) VALUES
(1, '2022-07-20 23:56:48', 1, 3),
(2, '2022-07-20 23:56:48', 2, 4),
(3, '2022-07-20 23:56:48', 4, 2),
(4, '2022-07-20 23:56:48', 5, 1),
(5, '2022-07-20 23:56:48', 3, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `touroperators`
--

CREATE TABLE `touroperators` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `touroperators`
--

INSERT INTO `touroperators` (`id`, `name`, `login`, `password`) VALUES
(1, 'Anex', '123456', '234567'),
(2, 'Kompas', '123456', '234567'),
(3, 'TUI', '123456', '234567'),
(4, 'Voyage Tour', '123456', '234567'),
(5, 'Coral', '123456', '234567'),
(6, 'Tez', '123456', '234567');

-- --------------------------------------------------------

--
-- Структура таблицы `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `touroperator_id` int(11) NOT NULL,
  `flight_company_id` int(11) NOT NULL,
  `tour_hotel_id` int(11) NOT NULL,
  `arrival_date` date NOT NULL,
  `departure_date` date NOT NULL,
  `tour_price` decimal(7,2) NOT NULL,
  `currency` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `tours`
--

INSERT INTO `tours` (`id`, `customer_id`, `touroperator_id`, `flight_company_id`, `tour_hotel_id`, `arrival_date`, `departure_date`, `tour_price`, `currency`) VALUES
(1, 1, 2, 2, 5, '2022-07-21', '2022-07-29', '1500.00', 'EUR'),
(2, 2, 1, 5, 3, '2022-07-26', '2022-08-09', '1643.00', 'USD'),
(3, 3, 4, 5, 4, '2022-07-25', '2022-08-01', '2360.00', 'BYN'),
(4, 4, 3, 4, 3, '2022-07-28', '2022-08-03', '33789.00', 'RUB'),
(5, 5, 1, 1, 1, '2022-07-31', '2022-08-09', '6320.00', 'EUR');

-- --------------------------------------------------------

--
-- Структура таблицы `tour_hotels`
--

CREATE TABLE `tour_hotels` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `food_type_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `tour_hotels`
--

INSERT INTO `tour_hotels` (`id`, `hotel_id`, `food_type_id`, `room_id`) VALUES
(1, 1, 2, 3),
(2, 1, 5, 2),
(3, 5, 3, 1),
(4, 4, 6, 3),
(5, 4, 4, 4),
(6, 3, 2, 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_country_id` (`country_id`);

--
-- Индексы таблицы `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `customer_passports`
--
ALTER TABLE `customer_passports`
  ADD KEY `fk_customer_passport_id` (`passport_id`),
  ADD KEY `fk_customer_id` (`customer_id`);

--
-- Индексы таблицы `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_departmnent_id` (`department_id`);

--
-- Индексы таблицы `employee_passports`
--
ALTER TABLE `employee_passports`
  ADD KEY `fk_employee_id` (`employee_id`),
  ADD KEY `fk_passport_id` (`passport_id`);

--
-- Индексы таблицы `flight_companies`
--
ALTER TABLE `flight_companies`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `food_types`
--
ALTER TABLE `food_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_city_id` (`city_id`);

--
-- Индексы таблицы `hotel_food_types`
--
ALTER TABLE `hotel_food_types`
  ADD KEY `fk_food_type_id` (`food_type_id`),
  ADD KEY `fk_hotel_food_type_id` (`hotel_id`);

--
-- Индексы таблицы `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD KEY `fk_room_id` (`room_id`),
  ADD KEY `fk_hotel_room_id` (`hotel_id`);

--
-- Индексы таблицы `passports`
--
ALTER TABLE `passports`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `passport_id` (`passport_id`),
  ADD UNIQUE KEY `passport_num` (`passport_num`);

--
-- Индексы таблицы `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tour_employee_id` (`employee_id`),
  ADD KEY `fk_tour_id` (`tour_id`);

--
-- Индексы таблицы `touroperators`
--
ALTER TABLE `touroperators`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tour_customer_id` (`customer_id`),
  ADD KEY `fk_touroperator_id` (`touroperator_id`),
  ADD KEY `fk_flight_company_id` (`flight_company_id`),
  ADD KEY `fk_tour_hotel_done_id` (`tour_hotel_id`);

--
-- Индексы таблицы `tour_hotels`
--
ALTER TABLE `tour_hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tour_hotel_id` (`hotel_id`),
  ADD KEY `fk_tour_food_type_id` (`food_type_id`),
  ADD KEY `fk_tour_room_id` (`room_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `flight_companies`
--
ALTER TABLE `flight_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `food_types`
--
ALTER TABLE `food_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `passports`
--
ALTER TABLE `passports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `touroperators`
--
ALTER TABLE `touroperators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `tour_hotels`
--
ALTER TABLE `tour_hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `fk_country_id` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

--
-- Ограничения внешнего ключа таблицы `customer_passports`
--
ALTER TABLE `customer_passports`
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `fk_customer_passport_id` FOREIGN KEY (`passport_id`) REFERENCES `passports` (`id`);

--
-- Ограничения внешнего ключа таблицы `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_departmnent_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);

--
-- Ограничения внешнего ключа таблицы `employee_passports`
--
ALTER TABLE `employee_passports`
  ADD CONSTRAINT `fk_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`),
  ADD CONSTRAINT `fk_passport_id` FOREIGN KEY (`passport_id`) REFERENCES `passports` (`id`);

--
-- Ограничения внешнего ключа таблицы `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `fk_city_id` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);

--
-- Ограничения внешнего ключа таблицы `hotel_food_types`
--
ALTER TABLE `hotel_food_types`
  ADD CONSTRAINT `fk_food_type_id` FOREIGN KEY (`food_type_id`) REFERENCES `food_types` (`id`),
  ADD CONSTRAINT `fk_hotel_food_type_id` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);

--
-- Ограничения внешнего ключа таблицы `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD CONSTRAINT `fk_hotel_room_id` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`),
  ADD CONSTRAINT `fk_room_id` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`);

--
-- Ограничения внешнего ключа таблицы `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `fk_tour_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`),
  ADD CONSTRAINT `fk_tour_id` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`);

--
-- Ограничения внешнего ключа таблицы `tours`
--
ALTER TABLE `tours`
  ADD CONSTRAINT `fk_flight_company_id` FOREIGN KEY (`flight_company_id`) REFERENCES `flight_companies` (`id`),
  ADD CONSTRAINT `fk_tour_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `fk_tour_hotel_done_id` FOREIGN KEY (`tour_hotel_id`) REFERENCES `tour_hotels` (`id`),
  ADD CONSTRAINT `fk_touroperator_id` FOREIGN KEY (`touroperator_id`) REFERENCES `touroperators` (`id`);

--
-- Ограничения внешнего ключа таблицы `tour_hotels`
--
ALTER TABLE `tour_hotels`
  ADD CONSTRAINT `fk_tour_food_type_id` FOREIGN KEY (`food_type_id`) REFERENCES `food_types` (`id`),
  ADD CONSTRAINT `fk_tour_hotel_id` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`),
  ADD CONSTRAINT `fk_tour_room_id` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
