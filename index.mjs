import inquirer  from "inquirer"
import db from './server'


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

