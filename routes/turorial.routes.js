module.exports = app => {
    const usuarios = require("../controllers/tutorial.controller");
    const electrodomesticos = require("../controllers/tutorial.controller");

    var router = require("express").Router();


    router.post("/",usuarios.create);

    //router.get("/", usuarios.findAll);
    router.get("/", electrodomesticos.findAllE);

   

    router.get("/:id",usuarios.findOne);

    router.put("/:id",usuarios.update);

    //router.delete("/:id",tutorials.delete);

    //router.delete("/",tutorials.deleteAll);

    //app.use('/api/tutorials', router);
    app.use('/api/electrodomesticos', router);
}