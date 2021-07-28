require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//admitir json
app.use(express.json());

//configuracion
app.set('port', port);

//rutas
app.use('/api', require('./rutas'))

//iniciando express
app.listen(app.get('port'),(error)=> {
    if(error) {
        console.log(' error al iniciar el servidor: ' + error)
    }else{
        console.log('servidor iniciado en el puerto: ' + port)
    }
});

this.app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true
    }));