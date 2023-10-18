import dotenv from 'dotenv';
dotenv.config();

const config = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  port: process.env.PORT
};

export default config;
