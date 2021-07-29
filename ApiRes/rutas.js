const router = require('express').Router()
const conexion = require('./config/conexion')

//asignamos todas las rutas

//get roles
router.get('/roles',(req, res) => {
    let sql = 'select * from roles';
    conexion.query(sql,(err,rows,fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    });
});

//get usuarios
router.get('/',(req, res) => {
    let sql = 'select * from usuarios';
    conexion.query(sql,(err,rows,fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    });
});

//buscar usuarios por id
router.get('/:id',(req, res) => {
    const {id} = req.params
    let sql = `select * from usuarios where Id_uduario = ?`;
    conexion.query(sql,[id],(err,rows,fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



//agregar usuario
router.post('/',(req, res) => {
    const{rol, nombre, activo} = req.body
    console.log(req.body);
    let sql = `insert into usuarios(Id_Rol, Nombre, Activo) values('${rol}','${nombre}','${activo}')`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'usuario agregado'})
        }
    });
});

//eliminar usuarios 
router.delete('/:id',(req, res)=>{
    const{id}=req.params

    let sql = `delete from usuarios where Id_uduario = '${id}'`;
    conexion.query(sql, {id} ,(err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'usuario eliminado'})
        }
    });
});

//modificar
router.put('/:id',(req, res) => {
    const{id} = req.params
    const{rol, nombre, activo} = req.body
    let sql = `update usuarios set 
                Id_Rol='${rol}',
                Nombre='${nombre}',
                Activo='${activo}'
                where Id_uduario = '${id}'`;

    conexion.query(sql, {id},(err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'usuario actualizado'})
        }
    });

});

module.exports= router