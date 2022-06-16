import  { useState } from 'react'
import './App.css';
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
import AddForm from './components/AddForm'

const App = () => {


  const [showButton, setShowButton] = useState(false)
  const[products, setProduсt] = useState([])

  const addProduct = name => {
  
   setProduсt(state => {
      return [{ id: uuidv4(), name, completed: false},...state]
      
      
    })
   
    
     setShowButton(true) 
    
    
    
  }

  const toggleComplete = product => {
    product.completed = !product.completed
    setProduсt(state => {
      state.sort((a, b) => a.completed - b.completed)
      return [...state]
    })
  }

  const removeProduct = id => {
    setProduсt(state => state.filter(product => product.id !== id ))
     if(products.length === 1){
      setShowButton(false)
    
    }
  
    }

   
    const removeAll = () => {
      setProduсt([])
      setShowButton(false) 
     }


  return (
    <>
     <div className='container'>
        <Header/>
        <AddForm addProduct={addProduct} products ={products}/>
        <hr/>
        <ShoppingList products={products} toggleComplete= {toggleComplete}  removeProduct = {removeProduct}/>

        <div className="footer">
         {showButton &&<button onClick ={() => removeAll(products)} className='btn removeAll'>Remove all</button>}
        </div>
      </div>
      
    </>
    
     
      
  )
}

export default App
