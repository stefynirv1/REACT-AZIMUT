module.exports = {
    HOST: "database-2.cu78b9xuiyoz.us-east-1.rds.amazonaws.com",
    USER : "admin",
    PASSWORD: "1026294524",
    DB: "BD_AZIMUT",
    dialect: "mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};


