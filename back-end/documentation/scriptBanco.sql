-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema taberna
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema taberna
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `taberna` DEFAULT CHARACTER SET utf8 ;
USE `taberna` ;

-- -----------------------------------------------------
-- Table `taberna`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `taberna`.`Users` (
  `uuid` VARCHAR(36) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `createdAt` TIMESTAMP(6) NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `taberna`.`Characters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `taberna`.`Characters` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `race` VARCHAR(45) NOT NULL,
  `lore` VARCHAR(1000) NOT NULL,
  `user_uuid` VARCHAR(36) NOT NULL,
  `thumbnail` VARCHAR(256) NOT NULL,
  `createdAt` TIMESTAMP(6) NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_characters_users_idx` (`user_uuid` ASC) VISIBLE,
  CONSTRAINT `fk_characters_users`
    FOREIGN KEY (`user_uuid`)
    REFERENCES `taberna`.`Users` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
