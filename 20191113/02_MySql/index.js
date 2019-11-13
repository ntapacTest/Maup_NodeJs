const mysql=require('mysql');

let connection=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    database:'users',
    password:''
});

connection.connect((err)=>{
    if (err) throw err;

    // Create database
    // let sql='CREATE DATABASE users';

    // Create table
    //let sql='CREATE TABLE user(id_user INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), age INT)';

    // Insert
    //let sql ='INSERT INTO user(name, age) VALUES("UserName", 29)';

    // Select data
    // let sql='SELECT * FROM user';
    // connection.query(sql,(err,result)=>{
    //     if(err) throw err;

    //     console.log('Query '+sql+' complete');
    //     console.log(result);
    //     connection.end();
    // });

    // Select data with params
    let sql='SELECT * FROM user WHERE name = ? AND age=?';

    let params=['UserName',29];

    connection.query(sql,params,(err,result)=>{
        if(err) throw err;

        console.log('Query '+sql+' complete');
        console.log(result);
        connection.end();
    });

    console.log('MySql connected......');
});

//connection.end();