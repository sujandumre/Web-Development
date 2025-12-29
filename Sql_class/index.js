// // const { faker } = require('@faker-js/faker');
// // const mysql =require( 'mysql2');
// // const express = require ('express');
// // const app = express();
// // const path = require("path");
// // const port = 3000;

// // app.set('view engine', 'ejs');
// // app.set("views",path.join(__dirname,'/views'));


// // // Create the connection to database
// // const connection =  mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   database: 'delta_app',
// //   password:'@su12#46$',
// // });

// // const getRandomUser = () => {
// //   return [
// //     faker.string.uuid(),  // use faker.datatype.uuid() if old version
// //     faker.internet.username(),
// //     faker.internet.email(),
// //      faker.internet.password(),
// //   ];
// // };

// // // inserting new values
// // // let q="INSERT INTO users (id, username, email, password) VALUES ?";
// // // let data=[];
// // // for (let i=1; i<=100; i++){
 
// // //   data.push(getRandomUser());
// // // }

// // // let users=[
// // //    ["123b", "newuserb", "abc@gmail.comb", "mypasswordb"],
// // //   ["123c", "newuserc","abc@gmail.comc", "mypasswordc"],]
// // // ;


// // app.get('/',(req,res)=>{
// //   let q=`SELECT COUNT(*) FROM user`;
// //   try{
// //   connection.query(q,(err, results)=>{
// //     if(err) throw err;
// //     let count=(results[0]['COUNT(*)']);
// //   res.render('home.ejs',{count});
// //     // console.log(results.length);
// //   });
// // }catch(err){
// //   console.log(err);
// //   res.send('Errrred in DB');
// // }
// // connection.end();
// // });

// // app.get('/user',(req,res)=>{
// //   let q=`SELECT * FROM user`;
// //   try{
// //   connection.query(q,(err, results)=>{
// //     if(err) throw err;
// //     // console.log(results);
// //     res.render('showuser.ejs',{users});
// //   // res.send(results);
// //     // console.log(results.length);
// //   });
// // }catch(err){
// //   console.log(err);
// //   res.send('Errored in DB');
// // }
// // connection.end();
// // });

// // app.listen(port,()=>{
// //   console.log(`Server is running on port ${port}`);
// // });




// const express = require('express');
// const mysql = require('mysql2');
// const { faker } = require('@faker-js/faker');
// const path = require('path');
// const methodOverride = require('method-override');
// const app = express();
// const port = 3000;

// app.use(methodOverride('_method'));
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // MySQL connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '@su12#46$',
//     database: 'delta_app'
// });

// // Function to generate a fake user
// const generateFakeUser = () => [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
// ];

// // Insert 100 fake users if table is empty
// const insertFakeUsersIfEmpty = () => {
//     connection.query('SELECT COUNT(*) AS total FROM users', (err, results) => {
//         if (err) return console.error('Error checking table:', err);

//         const total = results[0].total;
//         if (total >= 100) {
//             console.log('Already have 100+ users, skipping insert.');
//             return;
//         }

//         const data = [];
//         for (let i = 0; i < 100; i++) {
//             data.push(generateFakeUser());
//         }

//         const q = 'INSERT INTO users (id, username, email, password) VALUES ?';
//         connection.query(q, [data], (err, result) => {
//             if (err) return console.error('Error inserting fake users:', err);
//             console.log('Inserted 100 fake users successfully!');
//         });
//     });
// };

// // Call it once when server starts
// insertFakeUsersIfEmpty();

// // Home route - show total users
// app.get('/', (req, res) => {
//     connection.query('SELECT COUNT(*) AS total FROM users', (err, results) => {
//         if (err) return res.status(500).send('DB error');
//         const count = results[0].total;
//         res.render('home', { count });
//     });
// });

// // Show all users
// app.get('/user', (req, res) => {
//     connection.query('SELECT * FROM users', (err, results) => {
//         if (err) return res.status(500).send('DB error');
//         res.render('showuser.ejs', { users: results });
//     });
// });

// // edit route to render edit form
// app.get('/user/:id/edit',(req,res)=>{
//     let id=req.params.id;
//     let q=`SELECT * FROM users WHERE id='${id}'`; 
//    connection.query(q, (err, result) => {
//             if (err) return console.error('Error inserting fake users:', err);
//             let user=result[0];
//             console.log(result);
//             // console.log('Inserted 100 fake users successfully!');
//             res.render('edit.ejs',{user});
//         });
// });



// // update route
// app.patch('/user/:id', (req, res) => {
//     let { id } = req.params;
//     let { password: formpass, username: formusername, email: formemail } = req.body;

//     // Fetch user by ID
//     let q = `SELECT * FROM users WHERE id=?`; 
//     connection.query(q, [id], (err, result) => {
//         if (err) {
//             console.error('Error fetching user:', err);
//             return res.status(500).send('DB error');
//         }

//         if (result.length === 0) {
//             return res.send("User not found");
//         }

//         let user = result[0];
//         let userpass = user.password;

//         // Compare password
//         if (formpass !== userpass) {
//             return res.send("Password incorrect");
//         }

//         // Update username and email if password matches
//         let updateQ = `UPDATE users SET username=?, email=? WHERE id=?`;
//         let values = [formusername, formemail, id];

//         connection.query(updateQ, values, (err, updateResult) => {
//             if (err) {
//                 console.error('Error updating user:', err);
//                 return res.status(500).send('DB error');
//             }

//             console.log('User updated:', updateResult);
//             res.redirect('/user');   // Go back to user list
//         });
//     });
// });


// // Start server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });


const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@su12#46$'
});

// Ensure database + table exist
connection.query("CREATE DATABASE IF NOT EXISTS delta_app", (err) => {
  if (err) throw err;
  console.log("Database checked/created: delta_app");

  connection.changeUser({ database: 'delta_app' }, (err2) => {
    if (err2) throw err2;

    const createTableQ = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(100)
      )
    `;
    connection.query(createTableQ, (err3) => {
      if (err3) throw err3;
      console.log("Table checked/created: users");
    });
  });
});

// Function to create a random user
let createRandomUser = () => {
  return [
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home route → show total user count
app.get("/", (req, res) => {
  const q = `SELECT COUNT(*) AS count FROM users`;
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching count from DB");
    }
    let count = result[0].count;
    res.render("home.ejs", { count });
  });
});

// Users route → show all users in table
app.get("/user", (req, res) => {
  const q = `SELECT * FROM users`;
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching users from DB");
    }
    res.render("showuser.ejs", { users: result });
  });
});

// Edit Route → show edit form
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching user from DB");
    }
    if (!result || result.length === 0) return res.send("User not found");
    let user = result[0];
    res.render("edit.ejs", { user });
  });
});

// UPDATE Route → update user in database
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass = '', username: newUsername = '' } = req.body;

  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching user from DB");
    }
    if (!result || result.length === 0) return res.send("User not found");

    let user = result[0];
    let userpass = user.password || '';

    if (String(formpass).trim() !== String(userpass).trim()) {
      return res.send("Wrong Password");
    }

    let updateQ = `UPDATE users SET username = ? WHERE id = ?`;
    connection.query(updateQ, [newUsername, id], (err2) => {
      if (err2) {
        console.log(err2);
        return res.send("Error updating user");
      }
      return res.redirect("/user");
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
