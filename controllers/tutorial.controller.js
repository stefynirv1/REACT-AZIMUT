const db = require("../models");
const { findAllByTestId } = require("@testing-library/react");
const Usuario = db.usuarios;
const Electrodomestico = db.electrodomesticos;
const Reporte = db.reportes;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if (!req.body.nombre_usuario){
        res.status(400).send({
            message: "content can not be empty"
        });
        return;
    }

    //crear
    const usuario = {
        id_usuario: req.body.id_usuario,
        nombre_usuario: req.body.nombre_usuario,
        clave_usuario: req.body.clave_usuario,
    };

    const electrodomestico = {
        id_electrodomesticos: req.body.id_electrodomesticos,
        id_usuario: req.body.id_electrodomestico,
        nombre_electrodomestico: req.body.nombre_electrodomestico
    }

    const reporte = {
        id_reporte: req.body.id_reporte,
        id_usuario: req.body.id_usuario,
        id_electrodomestico: req.body.id_electrodomestico,
        fecha_reporte:req.body.fecha_reporte,
        consumo: req.body.consumo
    }

    

    //guardar en BD
    Usuario.create(usuario)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "algún error ocurrió creando el usuario."
        });
    });
};

//recuperar todos los datos de la BD
exports.findAll = (req,res) =>{
    const nombre_usuario = req.query.nombre_usuario;
    const nombre_electrodomestico = req.query.nombre_electrodomestico;
    var condition = nombre_usuario? {nombre_usuario: {[Op.like]: `%${nombre_usuario}`}}: null;
    var condition2 = nombre_electrodomestico? { nombre_electrodomestico: {[Op.like]: `%${nombre_electrodomestico}`}}: null;
    
    Usuario.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "algo pasho trayendo la información :("
            });
        });

};
    exports.findAllE = (req,res) =>{
    
    const nombre_electrodomestico = req.query.nombre_electrodomestico;
    var condition2 = nombre_electrodomestico? { nombre_electrodomestico: {[Op.like]: `%${nombre_electrodomestico}`}}: null;
    
    Electrodomestico.findAll({where: condition2})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "algo pasho trayendo la información :("
            });
        });

};

//traer sólo un registrooooo
exports.findOne = (req,res) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:"error trayendo el registro con id= " + id
            });
        });
};

exports.update = (req, res) =>{
    const id = req.params.id;

    Usuario.update(req.body,{
        where: { id: id }
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message: "se actualizó el registro. !!"
                });
            }else{
                res.send({
                    message: `no se pudo actualizar con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error actualizando id=" + id
            });
        });
    
}
exports.delete = (req,res) =>{
    const id = req.params.id;

    Tutorial.destroy({
        where: {id:id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message:"se elimino satisfactoriamente!"
            });

        }else{
            res.send({
                message:"no se pudo eliminar el usuario con id=${id}. Tal vez no está."
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message:"no se puede eliminar el usuario con id= " + id
        });
    });
};
