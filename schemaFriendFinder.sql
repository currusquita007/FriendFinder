CREATE DATABASE friendFinder_db;
USE friendFinder_db;

CREATE TABLE surveyAnswers
(
	id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
	photo VARCHAR(2083) NOT NULL,
	scores VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);