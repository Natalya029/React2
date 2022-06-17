import React from 'react'
import { useState } from 'react'


const Item = ({ product, toggleComplete, removeProduct, editProduct}) => {

  const [editMode, setEditMode] = useState(false); //För att ändra mellan input och p element
  const [productName, setProductName] = useState(product.name); // State för namnet som ska editeras


  return (
    

   
  
    <div className='item'>
        {editMode ? (
        <input value= {productName} onKeyUp={(e) => 
          {if (e.code === 'Enter') {
              setEditMode(false);
              editProduct(product.id, productName);
            }
          }}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          type="text"
          name="product"
          id="product"
        />
      ) : (
        <p onClick={() => {setEditMode(true);}} className={`text ${product.completed && 'completed'}`}>{product.name}</p>
      )}
       
     <div className='buttons'> 
    <button onClick={() => toggleComplete(product)} className='btn' type="submit"><i className="fa-solid fa-pen"></i></button>
    <button className='btn' type="submit" onClick={()=> removeProduct(product.id)}><i className="fa-solid fa-trash-can"></i></button>
    </div>
    </div>
    
   
  )
}

export default Item