const express = require("express");
const sql = require('mssql');
const cors = require('cors');
const productsRouter = require("./routes/products.routes");

const app = express();
app.use(cors());

app.use("/products", productsRouter);


// async function connectToDatabase() {
//   try {
//     await sql.connect(config);
//     const result = await sql.query`SELECT TOP (10) * FROM Products`;
//     res.json(result.recordset);
//     console.log('Connected to SQL Server');
//   } catch (error) {
//     console.error('Error connecting to SQL Server:', error);
//   }
// }

// connectToDatabase();


module.exports = {app};
