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
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS employee
CREATE TABLE employee (
	id int primary key auto_increment,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    manager_id int,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE cascade
);
--------------------------

-- View All Departments--
SELECT * FROM department

--View All Roles--
SELECT * FROM role

--View All Employees--
SELECT * FROM employee

--Add a Department--
INSERT INTO department
VALUES ()

--Add a Role--
INSERT INTO role
VALUES ()

--Add an Employee--
INSERT INTO employee
VALUES ()

--Update an Employee Role--
SELECT * FROM employee
JOIN role ON employee.role_id = role.id;

UPDATE role
SET title = '' 
WHERE employee first name = '${val.id}'