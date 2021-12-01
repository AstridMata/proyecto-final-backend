const mysql = require('mysql'); //requerir el paquete de mysql


const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'',
  database: 'library'
})

mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('db is connected');
    }
  });
  
  module.exports = mysqlConnection;
