import inquirer from "inquirer"
import mysql from 'mysql2'
import cTable from 'console.table';
import Database from './sql-queries/queries.js'

//--------DB Connection & Connection Test--------//
const db = mysql.createConnection(
    {
        host: 'localHost',
        database: 'employees_db',
        user: 'root',
        password: ''
    }
)

db.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    else {
        console.log(`Connected to the employee_db Database`)
    }
})
//----------------------------------------//

//--------------Initial Prompt------------//
directory();
async function directory() {
    try {
        //-------------Inquirer Directory Prompt-----------//
        const {directory, addDepartment, addRoleName, addRoleSalary, addRoleDepartment } = await inquirer.prompt([

            {
                type: 'list',
                name: 'directory',
                message: 'What would you like to do?',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
                filter(val) {
                    return val
                }
            },
            {
                type: 'input',
                name: 'addDepartment',
                message: 'Enter the name of a department',
                when:  (answer) => answer.directory==='Add a Department' 
                
            },
            {
                type: 'input',
                name: 'addRoleName',
                message: 'Enter the name of the role you want to add',
                when: (answer) => answer.directory==='Add a Role'
            },
            {
                type: 'input',
                name: 'addRoleSalary',
                message: 'Enter the Salary of the New role',
                when: (answer) => answer.directory==='Add a Role' 
            },
            {
                type: 'input',
                name: 'addRoleDepartment',
                message: 'Enter the Department of the New role',
                when: (answer) => answer.directory==='Add a Role' 
            }
            
        ]);

        //----------'View All' Functionality---------
        if (directory === 'View All Departments') {
            let db = new Database('department');
            let rows = await db.view()
            console.table(rows)
        }
        else if (directory==='View All Roles'){
            let db = new Database('role')
            let rows = await db.view()
            console.table(rows)
            console.log('Mistake')
        }
        else if (directory==='View All Employees'){
            let db = new Database('employee') 
            let rows = await db.view()
            console.table(rows)
        }
        
        //----------'Add Department Functionality-------//
        else if (directory ==='Add a Department'){

            let db = new Database('department') 
            let rows = await db.add(addDepartment)
            console.table(rows)
        }

        //----------'Add a Role Functionality----------//
        else if (directory==='Add a Role'){
            let db = new Database('role',addRoleName, '',addRoleSalary, addRoleDepartment) 
            let rows = await db.add()
            console.table(rows)
        }

    }
    catch (error) {
        console.error('Error with Query', error)
    }
    
      
    
    
}