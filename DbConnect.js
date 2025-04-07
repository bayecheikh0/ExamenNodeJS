const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'root', 
  database: 'mybase', 
  port: 8889 
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err.message);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});

module.exports = {connection};
