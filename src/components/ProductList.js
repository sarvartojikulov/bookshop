import React from 'react'
import Product from './Product'
export default function ProductList() {
  return (
    <div className='product_list_container'>
      <h1>ProductList</h1>
      <div className="product_list">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
    </div>
    
  )
}
