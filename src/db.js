import {createPool} from 'mysql2/promise';
import {DB_USER, DB_PORT, DB_HOOST, DB_DATABASE, DB_PASSWORD } from './routes/config.js';
// configuracion de la conexion a la base de datos
export const pool = createPool ({
    host: DB_HOOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE    
});





