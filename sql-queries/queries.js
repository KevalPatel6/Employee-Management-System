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
    constructor(tableName) {
        this.table = tableName
    }
   async view() {
        // if (this.table === 'department') {
        
        //     return db.promise().query('SELECT * FROM department')
        //         .then(([rows]) => {
        //             return rows
        //           } )
        //           .catch(console.log)
                  
        // }

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
            db.promise().query(`INSERT INTO department (name) VALUES (${value})`) 
            return db.promise().query(`SELECT * from department`)
                .then(([rows]) =>{
                    return rows
                })
                .catch(console.log)
        }
    }




update(){

}

delete (){

}
}

module.exports = Database