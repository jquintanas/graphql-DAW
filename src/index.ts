import express, { Application } from "express";
import morgan from "morgan";
const express_graphql = require('express-graphql');
//import schemas
import schema from "./schemas/schema";
// import util
import util from "./util";
class Server {
    private app: Application;
    private root = {
        alumno: util.getAlumno,
        alumnos: util.getAlumnos,
        updateAlumnoGrade: util.updateAlumnoGrade
    };
    constructor() {
        this.app = express();
        this.config();
    }

    config(): void {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use('/graphql', express_graphql({
            schema: schema,
            rootValue: this.root,
            graphiql: true
        }));
    }

    start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("server on port: ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
