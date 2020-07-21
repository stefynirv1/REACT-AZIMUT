const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: true,

    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
        
    }
});

const db = {}

db.Sequelize = Sequelize;
db.Sequelize = sequelize;

db.usuarios = require("./tutorial.model")(sequelize,Sequelize);
db.electrodomesticos = require("./electrodomestico.model")(sequelize,Sequelize);

module.exports = db;