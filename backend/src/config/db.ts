import mysql from 'mysql2/promise'

async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'e_commerce',
        password: 'admin',
    })
    return connection
}

export default getConnection
