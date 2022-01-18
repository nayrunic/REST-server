const express = require('express');
const cors = require('cors');

class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = "/api/users";

        //Middleware agrega funcionalidad al webserver
        this.middlewares();

        //rutas de la app
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //parseo y lectura del body
        this.app.use( express.json());

        //directorio publico
        this.app.use(express.static("public"))
    }

    routes(){

        this.app.use(this.userPath, require("../routes/user.routes"));
    }

    listen(){

        this.app.listen(this.port, () =>{
            console.log("Servidor corriendo en puerto", this.port);
        });
    }

}

module.exports = Server;