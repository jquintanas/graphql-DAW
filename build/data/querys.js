"use strict";
query;
getSingleAlumno($alumnoID, Int);
{
    alumno(id, $alumnoID);
    {
        Nombre,
            Universidad,
            Email,
            Nota;
    }
}
{
    "alumnoID";
    88;
}
query;
getAlumnosByGrades($alumnoGrade, Int);
{
    alumnos(nota, $alumnoGrade);
    {
        Nombre;
        Universidad;
        Email;
        Nota;
    }
}
{
    "alumnoGrade";
    90;
}
