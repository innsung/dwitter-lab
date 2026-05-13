import pool from '../db/connection.js';

export const getFooter = async() => {
    const sql = `select footer from portfolio`;
    const [results] = await pool.execute(sql, []);

    return await results[0].footer;
}