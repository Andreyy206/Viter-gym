-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 08:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `gym_accesories`
--

CREATE TABLE `gym_accesories` (
  `accesories_aid` int(11) NOT NULL,
  `accesories_title` varchar(50) NOT NULL,
  `accesories_details` varchar(50) NOT NULL,
  `accesories_price` varchar(20) NOT NULL,
  `accesories_description` varchar(40) NOT NULL,
  `accesories_size` varchar(20) NOT NULL,
  `accesories_photo` varchar(20) NOT NULL,
  `accesories_is_active` tinyint(1) NOT NULL,
  `accesories_datetime` varchar(20) NOT NULL,
  `accesories_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gym_accesories`
--

INSERT INTO `gym_accesories` (`accesories_aid`, `accesories_title`, `accesories_details`, `accesories_price`, `accesories_description`, `accesories_size`, `accesories_photo`, `accesories_is_active`, `accesories_datetime`, `accesories_created`) VALUES
(6, 'ASFAsfASF', 'ADSSADDASSDA', '2312', 'SDFSDFSDF', '234', 'Apparels-4.png', 1, '2024-11-15 13:59:30', '2024-11-15 13:55:26'),
(7, 'ASDSADa', 'sfsadS', 'ADSADFSAD', 'SADFSAFD', 'SADFSAD', 'Apparels-5.png', 1, '2024-11-15 15:08:35', '2024-11-15 15:08:35'),
(8, 'sdfsF', 'sdfF', 'sdf', 'sdfF', 'sdf', 'Apparels-5.png', 1, '2024-11-15 15:11:52', '2024-11-15 15:11:52'),
(9, 'ssdsd', 'dfgfghdf', 'fhdz', 'xfghxh', 'zfdxfdg', 'Apparels-3.png', 1, '2024-11-15 15:38:50', '2024-11-15 15:38:50');

-- --------------------------------------------------------

--
-- Table structure for table `gym_apparels`
--

CREATE TABLE `gym_apparels` (
  `apparels_aid` int(11) NOT NULL,
  `apparels_title` varchar(50) NOT NULL,
  `apparels_details` varchar(20) NOT NULL,
  `apparels_price` varchar(20) NOT NULL,
  `apparels_description` varchar(50) NOT NULL,
  `apparels_size` varchar(20) NOT NULL,
  `apparels_photo` varchar(20) NOT NULL,
  `apparels_is_active` tinyint(1) NOT NULL,
  `apparels_datetime` varchar(50) NOT NULL,
  `apparels_created` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gym_apparels`
--

INSERT INTO `gym_apparels` (`apparels_aid`, `apparels_title`, `apparels_details`, `apparels_price`, `apparels_description`, `apparels_size`, `apparels_photo`, `apparels_is_active`, `apparels_datetime`, `apparels_created`) VALUES
(1, 'fdghfd', 'gfbfg', 'zdfsa', 'dafg', 'afda', 'Apparels-5.png', 1, '2024-11-15 13:19:48', '2024-11-15 13:19:48'),
(2, ',FHJKLDHUSRT', 'RTYTARSU', 'KUYDK', 'JKLEDLK', 'DYKUD', 'Products-2.png', 1, '2024-11-15 13:50:06', '2024-11-15 13:50:06'),
(3, 'DYSUYEARY', 'artuuta', 'rusf', 'fsgjfjhsg', 'hagha', 'Products-3.png', 1, '2024-11-15 13:50:13', '2024-11-15 13:50:13'),
(4, 'zdfhYR', 'AEYSERY', 'GHAERFGad', 'FTGHAZHA', 'TFHHAH', 'Apparels-5.png', 1, '2024-11-15 13:50:22', '2024-11-15 13:50:22'),
(5, 'STHARH', 'EARTARETG', 'RTGHRTSAGHAS', 'HSTHHT', 'STHGHSRTG', 'Apparels-5.png', 1, '2024-11-15 13:50:30', '2024-11-15 13:50:30');

-- --------------------------------------------------------

--
-- Table structure for table `gym_equipments`
--

CREATE TABLE `gym_equipments` (
  `equipments_aid` int(11) NOT NULL,
  `equipments_title` varchar(10) NOT NULL,
  `equipments_details` varchar(50) NOT NULL,
  `equipments_price` varchar(20) NOT NULL,
  `equipments_description` varchar(20) NOT NULL,
  `equipments_size` varchar(20) NOT NULL,
  `equipments_photo` varchar(50) NOT NULL,
  `equipments_is_active` tinyint(1) NOT NULL,
  `equipments_datetime` varchar(20) NOT NULL,
  `equipments_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gym_equipments`
--

INSERT INTO `gym_equipments` (`equipments_aid`, `equipments_title`, `equipments_details`, `equipments_price`, `equipments_description`, `equipments_size`, `equipments_photo`, `equipments_is_active`, `equipments_datetime`, `equipments_created`) VALUES
(21, 'GYMISH SHI', 'Fit black Shirt', '$40', 'QWEWRWQEREWR', 'S / M / L / XL', 'Products-1.png', 1, '2024-11-15 14:12:00', '2024-11-15 14:09:29'),
(22, 'WHITE GYM ', 'Trunks', '$40', 'QWERTYY', 'S / M / L / XL', 'Apparels-2.png', 1, '2024-11-15 14:11:20', '2024-11-15 14:10:45'),
(23, 'BENCH PRES', 'QWERTY', '$100', 'ZXCVBNMN', 'ASDFG', 'Products-2.png', 1, '2024-11-15 14:14:46', '2024-11-15 14:14:46'),
(24, 'EFSA', 'SADFAf', 'sdafF', 'SDFS', 'SDFSF', 'Products-3.png', 1, '2024-11-15 15:11:13', '2024-11-15 15:11:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gym_accesories`
--
ALTER TABLE `gym_accesories`
  ADD PRIMARY KEY (`accesories_aid`);

--
-- Indexes for table `gym_apparels`
--
ALTER TABLE `gym_apparels`
  ADD PRIMARY KEY (`apparels_aid`);

--
-- Indexes for table `gym_equipments`
--
ALTER TABLE `gym_equipments`
  ADD PRIMARY KEY (`equipments_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gym_accesories`
--
ALTER TABLE `gym_accesories`
  MODIFY `accesories_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `gym_apparels`
--
ALTER TABLE `gym_apparels`
  MODIFY `apparels_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gym_equipments`
--
ALTER TABLE `gym_equipments`
  MODIFY `equipments_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
