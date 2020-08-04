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
CREATE TABLE `ReactJSFriedChicken`.`User` (
`Id` INT PRIMARY KEY AUTO_INCREMENT,
`Username` text,
`Image` text,
`Password` text,
`IdRole` int
);
Create Table `ReactJSFriedChicken`.`Role`(
`Id` INT PRIMARY KEY AUTO_INCREMENT,
`Name` text
);
CREATE TABLE `ReactJSFriedChicken`.`Cart`(
`Id` INT PRIMARY KEY AUTO_INCREMENT,
`IdUser` int,
`IdProduct` text,
`IsOrdered` int default 0,
`IsDelivered` int default 0
);
ALTER TABLE `ReactJSFriedChicken`.`Product` ADD FOREIGN KEY (`IdCategoryProduct`) REFERENCES `ReactJSFriedChicken`.`CategoryProduct` (`Id`);/* liên kết khóa ngoại.*/
ALTER TABLE `ReactJSFriedChicken`.`User` ADD FOREIGN KEY (`IdRole`) REFERENCES `ReactJSFriedChicken`.`Role` (`Id`);/* liên kết khóa ngoại.*/
ALTER TABLE `ReactJSFriedChicken`.`Cart` ADD FOREIGN KEY (`IdUser`) REFERENCES `ReactJSFriedChicken`.`User` (`Id`);/* liên kết khóa ngoại.*/
ALTER TABLE `ReactJSFriedChicken`.`Cart` add FOREIGN KEY (`IdProduct`) REFERENCES `ReactJSFriedChicken`.`Product` (`Id`) on update cascade on delete cascade;


END //
/*DELIMITER ;*/
CALL `?`();
DROP PROCEDURE `?`;
INSERT INTO `ReactJSFriedChicken`.`CategoryProduct` (`Name`) Values('Đồ ăn');
INSERT INTO `ReactJSFriedChicken`.`CategoryProduct` (`Name`) Values('Đồ uống');
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('GÀ RÁN',100000, '','http://localhost:5001/image/1.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('CƠM GÀ GIÒN KHÔNG XƯƠNG ',100000, '','http://localhost:5001/image/m1.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('CƠM GÀ TẮM NƯỚC MẮM',100000, '','http://localhost:5001/image/m2_2.png',1);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('CƠM GÀ GIÒN',100000, '','http://localhost:5001/image/m3_2.png',1);

INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Cà Phê Phúc Bồn Tử Hạnh Nhân',100000, '','http://localhost:5001/image/7c8006f72742d8-trnhnphclong.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Cà Phê Tử Hạnh Nhân Đá Xay',100000, '','http://localhost:5001/image/7fa4fa7e12d7a0-bnhoreoxaycngcph.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Hồng Trà Đác Cam',100000, '','http://localhost:5001/image/010dda166794bc-trxanhxayphclong.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Lài Đác Thơm',100000, '','http://localhost:5001/image/58fd43b11d4701-espressoraspberryalmond (1).png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Đào',100000, '','http://localhost:5001/image/58fd43b11d4701-espressoraspberryalmond.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Nhãn - Sen',100000, '','http://localhost:5001/image/0111eed6c489f1-trsaphclong.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Nhãn - Lài',100000, '','http://localhost:5001/image/5316b04006d856-trcocktailphclong.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Cocktail Phúc Long',100000, '','http://localhost:5001/image/11935a6d04f6fa-trsacphvikemti.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Xanh Latte',100000, '','http://localhost:5001/image/83168aba00828b-troxayphclong.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Sữa Cà Phê Với Kem Tươi',100000, '','http://localhost:5001/image/3937476a64a213-trophclong.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Trà Xanh Đá Xay',100000, '','http://localhost:5001/image/b8f1dd4d4f583c-dacthom.png',2);
INSERT INTO `ReactJSFriedChicken`.`Product` (`Name`, `Price`, `Info`,`Image`,`IdCategoryProduct`) VALUES ('Sô-Cô-La Cà Phê Đá Xay',100000, '','http://localhost:5001/image/b3172e9230c185-sclacphxay.png',2);

INSERT INTO `ReactJSFriedChicken`.`Role` (`Name`) Value ('Customer');
INSERT INTO `ReactJSFriedChicken`.`Role` (`Name`) Value ('Admin');
INSERT INTO `ReactJSFriedChicken`.`User` (`Username`,`Image`,`Password`,`IdRole`) values ('luan', '','sha1$a0e4cc6b$1$663284364b17ed86d7424587b0457323ae7b9122', 1);
INSERT INTO `ReactJSFriedChicken`.`User` (`Username`,`Image`,`Password`,`IdRole`) values ('luan1', '','sha1$a0e4cc6b$1$663284364b17ed86d7424587b0457323ae7b9122', 1);
INSERT INTO `ReactJSFriedChicken`.`User` (`Username`,`Image`,`Password`,`IdRole`) values ('nguyen', '','sha1$a0e4cc6b$1$663284364b17ed86d7424587b0457323ae7b9122', 1);
INSERT INTO `ReactJSFriedChicken`.`User` (`Username`,`Image`,`Password`,`IdRole`) values ('thanh', '','sha1$a0e4cc6b$1$663284364b17ed86d7424587b0457323ae7b9122', 1);

INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (1,1, 0, 0);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (1,2, 0, 0);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (1,3, 0, 0);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (1,4, 1, 0);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (1,5, 1, 1);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (2,1, 0, 0);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (2,3, 1, 0);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (3,4, 1, 1);
INSERT INTO `ReactJSFriedChicken`.`Cart` (`IdUser`,`IdProduct`,`IsOrdered`, `IsDelivered` ) values (3,3, 0, 1);
