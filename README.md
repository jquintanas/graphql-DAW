# Graphql-DAW
> El presente servidor fue diseñado con el objetivo de mostrar cómo realizar una configuración sencilla de un servidor en Node Js, Express y graphql para la gestión de datos de un archivo JSON de calificaciones y obtener nociones básicas de cómo manejar esta nueva herramienta.
[Link del api desplegada](https://graphql-daw.herokuapp.com/graphql)
Autor: Jonathan Quintana
[Tutorial - PDF - Construción paso a paso del servidor](https://drive.google.com/file/d/1gA6smoq8DumCq36xmBbIFzOdsgH-dJ5I/view?usp=sharing)


# Documentación 
#####   Métodos disponibles
- Query
    - alumno(id: Int!): Alumno
    - alumnos(nota: Int!): [Alumno]
- Mutaciones
    - updateAlumnoGrade(id: Int!, nota: Int!): Alumno

# Estructuras
```
type Alumno {
    Nombre : String
    Universidad : String
    Email : String
    Nota : Int
  }
```
### Installation
El servidor requiere [Node.js](https://nodejs.org/) para ejecutarse.
Instale las dependencias e inicie el servidor.

```sh
$ cd graphql-DAW
$ npm install
```
Licencia
----
MIT

