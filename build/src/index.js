"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_graphql = require('express-graphql');
//import schemas
const schema_1 = __importDefault(require("./schemas/schema"));
// import util
const util_1 = __importDefault(require("./util"));
class Server {
    constructor() {
        this.root = {
            alumno: util_1.default.getAlumno,
            alumnos: util_1.default.getAlumnos,
            updateAlumnoGrade: util_1.default.updateAlumnoGrade
        };
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use('/graphql', express_graphql({
            schema: schema_1.default,
            rootValue: this.root,
            graphiql: true
        }));
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("server on port: ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
