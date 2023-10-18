import { createPool } from "mysql2/promise";
//revisar conexion a la base de datos creada

export const db = createPool({
  host: "localhost",
  user: process.env.DB_USER || "root",
  password: "HailedSquare881",
  port: "3306",
  database: 'TiendaRopa'
})
