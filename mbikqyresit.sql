-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2021 at 07:29 PM
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
-- Table structure for table `mbikqyresit`
--

CREATE TABLE `mbikqyresit` (
  `id` int(250) NOT NULL,
  `emri` varchar(50) NOT NULL,
  `mbiemri` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `kontakti` varchar(30) NOT NULL,
  `uuid` varchar(200) NOT NULL,
  `verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mbikqyresit`
--

INSERT INTO `mbikqyresit` (`id`, `emri`, `mbiemri`, `email`, `password`, `kontakti`, `uuid`, `verified`) VALUES
(5, 'Dardan', 'Bakiu', 'dardan.bakiu@gmail.com', '$2b$10$nSYzmcD9iytRhrTKX1BuGO48kXtqbc8EPXFSyFKCJEccg5OVwZoc2', '044333333', '65f30af0-dc5b-436b-a690-716134865aa3', 1),
(6, 'dardan', 'bakiu', 'dardan@j-coders.com', '$2b$10$9NOYwEP9GJxpMePqqDFmJexfuASDzgXtQvodWny3XOAbGJl4YvT7O', '3242342', '6af8608f-f311-4064-b31d-4ed6752abdfd', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mbikqyresit`
--
ALTER TABLE `mbikqyresit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mbikqyresit`
--
ALTER TABLE `mbikqyresit`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
