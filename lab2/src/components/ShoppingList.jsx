import React from 'react'
import Item from './Item'

const ShoppingList = ({products, toggleComplete, removeProduct, editProduct}) => {

  return (
    <div className='shoppingList'>

     {
     products &&
     products.map(product=> (
     <Item  key={product.id} product={product} removeProduct= {removeProduct} toggleComplete ={toggleComplete} editProduct = {editProduct}/>
     ))}  
     
     {!products.length && (
      <p>No products to show</p>
  )} 
    
    </div>
    
    
  )
}

export default ShoppingList