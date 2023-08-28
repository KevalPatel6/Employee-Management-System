import inquirer from "inquirer"
import mysql from 'mysql2'
import cTable from 'console.table';

//--------DB Connection & Connection Test--------//
const db =  mysql.createConnection(
    {
        host: 'localHost',
        database: 'employees_db',
        user: 'root',
        password: ''
    }
)

db.connect(function(err){
    if(err){
        console.error('Error connecting: ' + err.stack);
        return;
    }
    else{
        console.log(`Connected to the employee_db Database`)
    }
})
//----------------------------------------//

//--------------Initial Prompt------------//
directory();
async function directory() {
    await inquirer.prompt([
        
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
            filter(val) {
                return val;
            }
        }
    ])
    .then((answer) =>{
        console.log(answer)
        if (answer.directory === 'View All Departments') {
            db.query('SELECT * FROM department', (err, results) => {
                if (err) {
                    console.error("Query could not be completed", err)
                }
                else {
                    console.table(results)
                    directory()
                }
            }
            )
        }
        
        if (answer.directory === 'View All Roles') {
            db.query('SELECT * FROM role', (err, results) => {
                if (err) {
                    console.error("Query could not be completed", err)
                }
                else {
                    console.table(results)
                    directory()
                }
            }
            )
        }
        
        if (answer.directory === 'View All Employees') {
            db.query('SELECT * FROM employee', (err, results) => {
                if (err) {
                    console.error("Query could not be completed", err)
                }
                else {
                    console.table(results)
                     directory()
                }
            }
            )
        }
        
        
    })
}
    
    