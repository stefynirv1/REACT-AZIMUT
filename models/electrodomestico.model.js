module.exports = (sequelize, Sequelize) => {
    const Electrodomestico = sequelize.define("electrodomestico", {
      id_electrodomesticos: {
        type: Sequelize.STRING
      },
      id_usuario: {
        type: Sequelize.STRING
      },
      nombre_electrodomestico: {
        type: Sequelize.STRING
      },
      fecha_instalacion:{
          type: Sequelize.DATE
      }
      
      
    });
  
    return Electrodomestico;
  };