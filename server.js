const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin:"https://frontend.d8x68jwk9dt9j.amplifyapp.com"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

const db = require("./models");

//db.sequelize.sync({ force: true }).then(()=>{
 //   console.log("eliminando y re sincronizando base de datos.");
//});


app.get("/", (req,res) => {
    res.json({message: "Consultas!"})
});

require("./routes/turorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`EL servidor está arriba en el puerto ${PORT}.`);
});


