const { alumnos } = require("./../data/datos.json");
class Util {
  getAlumno = (args: any) => {
    let id = args.id;
    return alumnos.filter((alumno: any) => {
      return alumno.ID == id;
    })[0];
  }

  getAlumnos = (args: any) => {
    if (args.nota) {
      let nota = args.nota;
      return alumnos.filter((alumno: any) => alumno.Nota === nota);
    } else {
      return alumnos;
    }
  }

  updateAlumnoGrade = ({ id, nota }: any) => {
    alumnos.map((alumno: any) => {
      if (alumno.ID === id) {
        alumno.Nota = nota;
        return alumno;
      }
    });

    return this.getAlumno(id);
  }
}
export default new Util();