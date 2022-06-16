import {useState, useRef} from 'react'



  const AddForm = ({addProduct, products}) => {
  const[productName, setProductName] = useState('')
  const [error, setError] = useState(false)
  const [errorLength, setErrorLength] = useState(false)
  const inputRef = useRef()
  

const handleSubmit = e => {
  e.preventDefault()
  inputRef.current.focus()
  if(productName.trim()===''){
    setError(true)
    return
  }

  if(productName.length > 20){
    setErrorLength(true)
    return
    
  }
setError(false)
setErrorLength(false)
addProduct(productName)
setProductName('')
console.log(products)


 
}


  return (
    <>
     <form onSubmit={handleSubmit}>
    <div className='input-group'>
    <input className='form-control' type="text" placeholder='New product' value={productName} ref={inputRef} onChange={e => setProductName(e.target.value)}/>
    <button className='btn' type="submit">Add</button>
    </div>
    </form>
    {error && <p className='error'>You need to enter something</p>}
    {errorLength && <p className='error'>You need to enter max 20 simbols </p>}
    </>
   
  )
}

export default AddForm