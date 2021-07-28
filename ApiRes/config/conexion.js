const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'text-exampledb'
});

conexion.connect((err) => {
    if(err) {
        console.log('ha ocurrido un error '+ err)
    }else{
        console.log('Conexion exitosa')
    }
});

module.exports = conexion;