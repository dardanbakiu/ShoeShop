-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2021 at 07:30 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoeshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `kepucet`
--

CREATE TABLE `kepucet` (
  `id` int(11) NOT NULL,
  `firma` varchar(30) NOT NULL,
  `emrikpuces` varchar(30) NOT NULL,
  `madhesia` int(2) NOT NULL,
  `emrifotos` varchar(250) NOT NULL,
  `cmimi` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kepucet`
--

INSERT INTO `kepucet` (`id`, `firma`, `emrikpuces`, `madhesia`, `emrifotos`, `cmimi`) VALUES
(1, 'nike', 'asdasd', 43, 'bg.jpg', 222),
(2, 'nike', 'air force', 42, 'nike333.jpg', 200),
(3, 'adidas', 'kasdmaskd', 42, 'adidasKpuce.jpg', 444);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kepucet`
--
ALTER TABLE `kepucet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kepucet`
--
ALTER TABLE `kepucet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
