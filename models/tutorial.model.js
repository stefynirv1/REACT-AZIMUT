module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      nombre_usuario: {
        type: Sequelize.STRING
      },
      clave_usuario: {
        type: Sequelize.STRING
      },
      
    });
  
    return Usuario;
  };


  