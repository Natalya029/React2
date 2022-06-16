import React from 'react'
//import { useState } from 'react'


const Item = ({ product, toggleComplete, removeProduct}) => {


  return (
    

   
  
    <div className='item'>
       
    <p  className={`text ${product.completed && 'completed'}`}>{product.name}</p>
     <div className='buttons'> 
    <button onClick={() => toggleComplete(product)} className='btn' type="submit"><i className="fa-solid fa-pen"></i></button>
    <button className='btn' type="submit" onClick={()=> removeProduct(product.id)}><i className="fa-solid fa-trash-can"></i></button>
    </div>
    </div>
    
   
  )
}

export default Item