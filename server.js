const express = require('express');
const mysql = require('mysql2')

const PORT = process.env.PORT || 3306

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db =  mysql.createConnection(
    {
        host: 'localHost',
        database: 'employees_db',
        user: 'root',
        password: ''
    }
)





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });




  
module.exports = db
