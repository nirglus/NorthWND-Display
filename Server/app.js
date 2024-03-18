const express = require("express");
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());

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

async function connectToDatabase() {
  try {
    await sql.connect(config);
    // const result = await sql.query`SELECT TOP (10) * FROM Products`;
    // res.json(result.recordset);
    console.log('Connected to SQL Server');
  } catch (error) {
    console.error('Error connecting to SQL Server:', error);
  }
}

connectToDatabase();


module.exports = app;
