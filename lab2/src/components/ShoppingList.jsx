import React from 'react'
import Item from './Item'

const ShoppingList = ({products, toggleComplete, removeProduct}) => {

  return (
    <div className='shoppingList'>

     {
     products &&
     products.map(product=> (
     <Item  key={product.id} product={product} removeProduct= {removeProduct} toggleComplete ={toggleComplete} />
     ))}  
     
     {!products.length && (
      <p>No products to show</p>
  )} 
    
    </div>
    
    
  )
}

export default ShoppingList