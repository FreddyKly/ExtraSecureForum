const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'mariadb', //uncomment when running the application with docker-compose
    // host: 'localhost', // uncomment when running the application on native machine 
    port: '3306', 
    user:'root', 
    password: 'password',
    connectionLimit: 5,
    database: 'SecureDatabase'
});

pool.getConnection((err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connection');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }
    if(connection) connection.release();

    return;
});

module.exports = pool;