--Create Database--
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create Tables--
DROP TABLE IF EXISTS department;
CREATE table department(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL

);

DROP TABLE IF EXISTS role;
CREATE TABLE role(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);
--------------------------