-- Create Tables--
DROP TABLE IF EXISTS department;
CREATE table department(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(30) NOT NULL

);

DROP TABLE IF EXISTS role;
CREATE TABLE role(
	id INT PRIMARY KEY auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
	id int primary key auto_increment,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int,
    manager_id int,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);
--------------------------