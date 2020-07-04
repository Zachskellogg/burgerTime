DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);