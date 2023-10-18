import { createPool } from "mysql2/promise";
import config from '../config.js';
//revisar conexion a la base de datos creada

export const db = createPool({
  host: config.host,
  user: config.user|| "root",
  password: config.password|| "",
  port: config.db_port|| 3306,
  database: config.db_name
})
