import { createPool } from "mysql2/promise";
import config from '../config.js';
//revisar conexion a la base de datos creada

export const db = createPool({
  host: config.host,
  user: config.user|| "root",
  password: config.password|| "MSHarAcOVPRLOtgDsZI",
  port: config.db_port,
  database: config.db_name
})
