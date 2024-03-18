const sql = require('mssql');

const config = {
    user: 'user4',
    password: 'user4',
    server: 'DESKTOP-IA4S4SM', 
    database: 'Northwnd',
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };

const getProducts = async (req, res) =>{
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT TOP (10) * FROM Products`;
        res.json(result.recordset);
        console.log('Connected to SQL Server');
      } catch (error) {
        console.error('Error connecting to SQL Server:', error);
      }
}

module.exports = {getProducts}