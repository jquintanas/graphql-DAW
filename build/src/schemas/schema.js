"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { buildSchema } = require('graphql');
// GrapqhQL Schema
const schema = buildSchema(`
  type Query {
    alumno(id: Int!): Alumno
    alumnos(nota: Int!): [Alumno]
  }

  type Mutation {
    updateAlumnoGrade(id: Int!, nota: Int!): Alumno
  }

  type Alumno {
    Nombre : String
    Universidad : String
    Email : String
    Nota : Int
  }
`);
exports.default = schema;
