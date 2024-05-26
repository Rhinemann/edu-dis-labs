CREATE OR REPLACE DATABASE mydb;
USE mydb;

CREATE USER if not exists `user`@`localhost` IDENTIFIED BY 'SumerianSQL';
GRANT ALL PRIVILEGES ON mydb.* TO `user`@`localhost`;

CREATE TABLE mydb.account (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(64),
    password CHAR(128)
);

CREATE TABLE mydb.survey (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    isPaused BOOLEAN,
    isNamed BOOLEAN,
    name VARCHAR(256),
    duration VARCHAR(256),
    account_id INT NOT NULL REFERENCES account(id)
);

CREATE TABLE mydb.question (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE mydb.link (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    uses INT,
    responces INT,
    usageLimit INT,
    responceLimit INT,
    path VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE mydb.responce (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    value TEXT(16384),
    question_id INT NOT NULL REFERENCES question(id),
    account_id INT REFERENCES account(id)
);
