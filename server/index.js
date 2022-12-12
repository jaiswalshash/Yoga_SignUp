const express = require("express");
const mysql = require("mysql2");

const db = mysql.createPool({
    connectionLimit : 100, 
    host: "localhost",
      user: "root",
      password: "password",
    database: "yoga_db",
});
const app = express();

app.get("/", (req, res) =>{
    const sqlCom = "INSERT INTO customers(name, dateOfBirth, email, password) VALUES ('Shan', '2004-01-11','hjass@12123453', md5('password1234'))";
    db.query(sqlCom, (err, result)=> {
        console.log(result);
        res.send("The server is up and running ");
    });
    
})
db.query("SELECT * FROM customers",(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data[2].email);
});

app.listen(5000, () => {
    console.log("The server is running on port 5000")
})
