import { useState } from 'react'
import Button from './Button'
import Input from './Input'

const AddItemComp = ({onAdd}) => {

    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productDiscription, setProductDiscription] = useState()


    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!productName){
            alert('Please Add Product name')
            return
        }
        if(!productPrice){
            alert('Please Add Product price')
            return
        }
        if(!productDiscription){
            alert('Please Add Product discription')
            return
        }

        onAdd({productName,productPrice,productDiscription})

        setProductName('')
        setProductPrice('')
        setProductDiscription('')

    }
    return (

        <form className={'addItem'} onSubmit={onSubmit}>

            <Input type='text'
             disc='Please add  a product name...' 
             inputName='Product' 
             styles='addItemInput' 
             label='Product Name: ' 
             text={productName} 
             onChange={(e)=>setProductName(e.target.value)} />

            <Input type='text'
             disc='Please add  Price...' 
             inputName='Product' 
             styles='addItemInput' 
             label='Product Price: ' 
             text={productPrice} 
             onChange={(e)=>setProductPrice(e.target.value)} />

            <Input type='text' 
            disc='Please add  Discription...' 
            inputName='Product' 
            styles='addItemInput' 
            label='Product Discription: ' 
            text={productDiscription} 
            onChange={(e)=>setProductDiscription(e.target.value)} />

            <Input type='file' 
            inputName='Product image: ' 
            styles='addItemInput' />

            <Button name='Add New' styles='btnAdd' type='submit' />

        </form>
    )
}

export default AddItemComp;
