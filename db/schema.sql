CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE `burgers` (
	id Integer(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN NOT NULL,
    primary key (id)
);