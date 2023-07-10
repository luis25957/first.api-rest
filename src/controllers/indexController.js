// funcion para alterar el ping del index (suma de 1 + 1)
import {pool} from '../db.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT  "pong" AS result' )
    res.json(result[0])
}