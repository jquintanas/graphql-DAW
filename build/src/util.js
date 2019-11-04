"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { alumnos } = require("./../data/datos.json");
class Util {
    constructor() {
        this.getAlumno = (args) => {
            let id = args.id;
            return alumnos.filter((alumno) => {
                return alumno.ID == id;
            })[0];
        };
        this.getAlumnos = (args) => {
            if (args.nota) {
                let nota = args.nota;
                return alumnos.filter((alumno) => alumno.Nota === nota);
            }
            else {
                return alumnos;
            }
        };
        this.updateAlumnoGrade = ({ id, nota }) => {
            alumnos.map((alumno) => {
                if (alumno.ID === id) {
                    alumno.Nota = nota;
                    return alumno;
                }
            });
            return this.getAlumno(id);
        };
    }
}
exports.default = new Util();
