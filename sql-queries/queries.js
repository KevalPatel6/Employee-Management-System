let mysql = require('mysql2')

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

class Database {
    constructor(tableName, roleTitle, employeeName, employeeSalary, department) {
        this.table = tableName,
        this.name = employeeName,
        this.salary = employeeSalary,
        this.department = department
        this.title = roleTitle
    }
   async view() {
        if (this.table === 'department') {
        
            return db.promise().query('SELECT * FROM department')
                .then(([rows]) => {
                    return rows
                  } )
                  .catch(console.log)
                  
        }

        if (this.table === 'role') {
        
            return db.promise().query(`
            SELECT role.id, role.title, department.name, role.salary  
            FROM role
            INNER JOIN department ON role.department_id = department.id
            ORDER BY role.id;`)
                .then(([rows]) => {
                    return rows
                  } )
                  .catch(console.log)
                  
        }
        if (this.table === 'employee') {
        
            return db.promise().query(`
            SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id
            FROM employee
            INNER JOIN role ON employee.role_id = role.id
            INNER JOIN department ON role.department_id = department.id
            ORDER BY employee.id`)
                .then(([rows]) => {
                    return rows
                  } )
                  .catch(console.log)
                  
        }


    }

    async add(value) {
     
        if(this.table==='department'){
            await db.promise().query(`INSERT INTO department (name) VALUES (${value})`) 
            return db.promise().query(`SELECT * from department`)
                .then(([rows]) =>{
                    return rows
                })
                .catch(console.log)
        }
        if(this.table==='role'){
           
            await db.promise().query(`INSERT INTO role (title, salary) VALUES ('${this.title}',${this.salary})`);
            await db.promise().query(`INSERT INTO role (department_id) SELECT department.id FROM department JOIN role on department.id = role.department_id where department.name is = '${this.department}'`)
            return db.promise().query('SELECT * from roles')    
            .then(([rows]) =>{
                return rows
                }

                )
        }
    }




update(){

}

delete (){

}
}

module.exports = Database