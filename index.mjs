import inquirer  from "inquirer";
import mysql2 from 'mysql2'

let {options} = await inquirer.prompt([
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices:['View All Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        filter(val){
            return val;
        }

    }





])