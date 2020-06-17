CREATE SCHEMA if not exists `ReactJSFriedChicken`;
USE ReactJSFriedChicken;
DROP PROCEDURE IF EXISTS `?`;
DELIMITER //
ALTER SCHEMA `ReactJSFriedChicken`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;
CREATE PROCEDURE `?`()
BEGIN
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
   CREATE TABLE `ReactJSFriedChicken`.`Product`
(
    `Id`	int PRIMARY KEY auto_increment,
	`Name`	TEXT,
	`Price`	Int,
	`Info`	TEXT,
    `Image` Text,
    `IdCategoryProduct` int
);

CREATE TABLE `ReactJSFriedChicken`.`CategoryProduct` (
    `Id` INT PRIMARY KEY AUTO_INCREMENT,
     `Name` text
);


ALTER TABLE `ReactJSFriedChicken`.`Product` ADD FOREIGN KEY (`IdCategoryProduct`) REFERENCES `ReactJSFriedChicken`.`CategoryProduct` (`Id`);/* liên kết khóa ngoại.*/




END //
/*DELIMITER ;*/
CALL `?`();
DROP PROCEDURE `?`;
INSERT INTO `ReactJSFriedChicken`.`CategoryProduct` (`Name`) Values('Đồ ăn');
INSERT INTO `ReactJSFriedChicken`.`CategoryProduct` (`Name`) Values('Đồ uống');
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Gà Rán',100000, '','/1.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Gà Rán',100000, '','/1.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Gà Rán',100000, '','/1.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Gà Rán',100000, '','/1.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('7up',100000, '','/1.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('7up',100000, '','/1.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('7up',100000, '','/1.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('7up',100000, '','/1.png',2);