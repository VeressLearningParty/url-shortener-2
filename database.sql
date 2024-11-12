-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.33 - MySQL Community Server - GPL
-- Операционная система:         Linux
-- HeidiSQL Версия:              12.2.0.6576
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Дамп структуры базы данных db
CREATE DATABASE IF NOT EXISTS `database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `database`;

-- Дамп структуры для таблица db.shorts
CREATE TABLE IF NOT EXISTS `table` (
  `short` varchar(8) NOT NULL DEFAULT '',
  `full-url` longtext,
  PRIMARY KEY (`short`),
  UNIQUE KEY `short` (`short`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='table for shortener-2';

LOCK TABLES `table` WRITE;
/*!40000 ALTER TABLE `shorts` DISABLE KEYS */;
INSERT INTO `database`.`table` (`short`, `full-url`) VALUES ('b8b8v9v9', 'www.instagram.com');
INSERT INTO `database`.`table` (`short`, `full-url`) VALUES ('g5g5h6h6', 'www.twitch.com');
/*!40000 ALTER TABLE `shorts` ENABLE KEYS */;
UNLOCK TABLES;



-- Экспортируемые данные не выделены.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
