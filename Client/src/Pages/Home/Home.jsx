import React from 'react'
import Products from '../../Components/Products/Products'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <button><Link to="/products">Products</Link></button>
    </div>
  )
}

export default Home
