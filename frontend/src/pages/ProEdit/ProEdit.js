import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProductDetails,UpdateProduct} from '../../function/productActions'
import HashLoader from "react-spinners/HashLoader";
import { Input, InputGroup, } from '@chakra-ui/input'
import { Helmet } from 'react-helmet';
import {Box, Checkbox, Stack, Textarea} from '@chakra-ui/react'
import { PRODUCT_UPDATE_RESET } from '../../ConsFunction/productConstants';
import './ProEdit.css'




const ProEdit = ({match,history}) => {
    
    const productId = match.params.id
    const [name,setName] = useState('')
    const [description,setdescription] = useState('')
    const [price,setprice] = useState(0)
    const [countInStock,setcountInStock] = useState(0)
    const [Url1,setUrl1] = useState('')
    const [Url2,setUrl2] = useState('')
    const [Url3,setUrl3] = useState('')

    const [Images] = useState([])
    const [category,setcategory] = useState([])
    const [Dekstopselected,setDekstopselected] = useState(false)
    const [Laptopselected,setLaptopselected] = useState(false)
    const [UsedPartselected,setUsedPartselected] = useState(false)
    const [Softwareselected,setSoftwareselected] = useState(false)
    const [Accessoriesselected,setAccessoriesselected] = useState(false)
    const [message] = useState(null)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading,error, product } = productDetails
    const productUpdate = useSelector(state => state.productUpdate)
    const { loading:lodingUpdate,error:errorUpdate, success:successUpdate } = productUpdate



    useEffect(() => {



        if(successUpdate){
            dispatch({type : PRODUCT_UPDATE_RESET})
            history.push('/admin/productlist')
        }
        else{
            if(!product.name || product._id !== productId){
                dispatch(listProductDetails(productId))
              }else{
                setName(product.name)
                setprice(product.price)
                setdescription(product.description)
                setUrl1(product.images[0])
                setUrl2(product.images[1])
                setUrl3(product.images[2])
                setcategory(product.category)
                setcountInStock(product.countInStock)
                setDekstopselected(category.includes("Dekstop"))
                setLaptopselected(category.includes("Laptop"))
                setUsedPartselected(category.includes("UsedPart"))
                setSoftwareselected(category.includes("Software"))
                setAccessoriesselected(category.includes("Accessories"))
                }
        }

      
       
        return () => {
        }
    }, [dispatch,productId,history,product,category,successUpdate])

    const submitHandler = (e) => {
        Images.push(Url1)
        Images.push(Url2)
        Images.push(Url3)


        e.preventDefault()
        dispatch(UpdateProduct({
            _id: productId,
            name,
            price,
            Images,
            category,
            countInStock,
            description

        }))
    }

    const checkboxhandlercg = (D) =>{
        
            let index = category.indexOf(D)
        if(index> -1){ 
            category.splice(index,1)

        }
        else{
            category.push(D)


        }
    }

    return (
        <div className = 'Edituser'>
            <Helmet>
                <title>Edit Product</title>
            </Helmet>

            
               {error && <h4>{error}</h4>}
               {
                
               }
               {loading || lodingUpdate ? 
                        <div className='loading'>
                            <HashLoader   color={"#1e1e2c"}  loading={lodingUpdate} size={40} />
                        </div>
                
                : errorUpdate ? <h4>{errorUpdate}</h4> :
          <div>
            <h4 className = 'Edittitle'>Edit Product :</h4>
            <div className ='formedit'>
            		<form onSubmit={submitHandler}>

                <div >
                <div className="input-div zz">
                Name :
                   <div className="div">
                       
                   <InputGroup>
                      <Input type="text"   placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
                   </InputGroup>
           		   </div>
           		</div>


           		<div className="input-div one">
                   Price :
           		   <div className="div">
           		   		<InputGroup>
                              <Input  type="text"  placeholder="Enter price" onChange={(e) => setprice(e.target.value)} />
                         </InputGroup>                        
           		   </div>
                  
           		</div>
                   <div className="input-div one">
                   countInStock :
           		   <div className="div">
           		   		<InputGroup>
                              <Input  type="text"  placeholder="Enter stock count" onChange={(e) => setcountInStock(e.target.value)} />
                         </InputGroup>
                         
           		   </div>
                  
           		</div>
                   <div className="input-div one">
                       Description:
           		   <div className="div">
                          <Stack direction = 'column' spacing={4}>
                          <InputGroup>
                              <Textarea size = 'sm'   placeholder="Enter Description" onChange={(e) => setdescription(e.target.value)} />
                         </InputGroup>
                         <Stack direction="row">
                      <Checkbox onChange = {() =>{checkboxhandlercg('Dekstop');setDekstopselected(!Dekstopselected)}} isChecked = {Dekstopselected}>Dekstop </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandlercg('Laptop') ; setLaptopselected(!Laptopselected)}} isChecked = {Laptopselected}>Laptop </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandlercg('UsedPart'); setUsedPartselected(!UsedPartselected)}} isChecked = {UsedPartselected}>UsedParts </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandlercg('Software') ; setSoftwareselected(!Softwareselected)}} isChecked = {Softwareselected}>Software </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandlercg('Accessories') ; setAccessoriesselected(!Accessoriesselected)}} isChecked = {Accessoriesselected}>Accessories </Checkbox>
                      </Stack>
                    </Stack>
                          
          
           		   </div>
                  
           		</div>



                

           		<div className="input-div pass">

           		   <div className="div">
                      
            	   </div>
            	</div>

                <div className="input-div pass">
                Urls for images:
           		   <div className="div urls">

  

                      <Box>
                         <Stack direction ='column' >
                            <Input type= 'text' placeholder="Product URL 1"  onChange = {(e)=>{setUrl1(e.target.value)}}/>
                            <Input type= 'text' placeholder="Product URL 2" onChange = {(e)=>{setUrl2(e.target.value)}}/>
                            <Input type= 'text' placeholder="Product URL 3" onChange = {(e)=>{setUrl3(e.target.value)}}/>
                         </Stack> 
                         </Box>
                      {
                        
                      }
            	   </div>
            	</div>
                {message && <h4 className = 'Message'>{message}</h4>}
                <input type="submit" className="btna2 postionbtnupdate" value="Update"/>
                
                </div>
                
               
            	
                
              
            </form>
            </div>
            </div>
}
        </div>
    )
}

export default ProEdit
