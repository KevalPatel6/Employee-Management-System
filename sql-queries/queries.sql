--View All Departments--
SELECT * FROM department

--View All Roles--
SELECT role.role_id, role.title, department.name, role.salary  
FROM role
INNER JOIN department ON role.department_id = department.id

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
