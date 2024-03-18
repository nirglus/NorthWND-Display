import { useState, useEffect } from "react";
import axios from "axios";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const getProducts = async() =>{
    try {
        const result = await axios.get("http://localhost:3001/products");
        console.log(result.data);
        setProducts(result.data);

    } catch (error) {
        console.log("Failed to retrieve products", error);
    }
  }

  useEffect(() =>{
    getProducts();
  }, [])
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Supplier ID</th>
          <th>Category ID</th>
          <th>Quantity Per Unit</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Units On Order</th>
          <th>Reorder Level</th>
          <th>Discontinued</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) =>(
            <tr key={index}>
                <td>{product.ProductID}</td>
                <td>{product.ProductName}</td>
                <td>{product.SupplierID}</td>
                <td>{product.CategoryID}</td>
                <td>{product.QuantityPerUnit}</td>
                <td>${product.UnitPrice}</td>
                <td>{product.UnitsInStock}</td>
                <td>{product.UnitsOnOrder}</td>
                <td>{product.ReorderLevel}</td>
                <td>{product.Discontinued ? "true" : "false"}</td>
            </tr>
        ) )}
      </tbody>
    </table>
    </div>
  )
}

export default ProductsTable
