const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'node_crud',
  port: 3307,
});

connection.connect();

function getAllUsers(callback) {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    callback(results);
  });
}

function getSingleUser(id,callback) {
  connection.query('SELECT * FROM users where id=?',id, (error, results) => {
    if (error) throw error;
    callback(results);
  });
}

function addUser(user, callback) {
  connection.query('INSERT INTO users SET ?', user, (error, results) => {
    if (error) throw error;
    callback(results.insertId);
  });
}
function addPassword(user, callback) {
  connection.query('INSERT INTO users SET ?', user, (error, results) => {
    if (error) throw error;
    callback(results.insertId);
  });
}

function updateUser(id, user, callback) {
  //console.log(id,user);
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error) => {
    if (error) throw error;
    callback();
  });
}

function deleteUser(id, callback) {
  connection.query('DELETE FROM users WHERE id = ?', id, (error) => {
    if (error) throw error;
    callback();
  });
}

module.exports = {
  getAllUsers,
  addUser,
  addPassword,
  updateUser,
  deleteUser,
  getSingleUser
};
