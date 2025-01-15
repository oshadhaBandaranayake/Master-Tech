import React,{useEffect} from 'react'
import { listProducts,CreateProduct} from '../../function/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_CREATE_RESET } from '../../ConsFunction/productConstants';
import './products.css'
import {
    Button
  } from "@chakra-ui/react"
import { CgAdd } from 'react-icons/cg';
import { Helmet } from 'react-helmet';
const Products = ({history,match}) => {
    const dispatch = useDispatch()
    const productDelete = useSelector(state => state.productDelete)
    const {success:successDelete} = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const {success:successCreate,product:createdproduct} = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        dispatch({type : PRODUCT_CREATE_RESET})

        if(!userInfo.isAdmin){
            history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/product/${createdproduct._id}/edit`)
        }else{
            dispatch(listProducts())

        }
    },[dispatch,history,userInfo,successDelete,successCreate,createdproduct])

    const createproducthandler = () =>{
        dispatch(CreateProduct())
    }
    return (

        <div className = 'Users'>
            <Helmet>
                <title>products</title>
            </Helmet>
        <h1 className = 'titlepanel'> Add new Products :</h1>
        <p></p>
            <Button leftIcon = {<CgAdd size = '20' />} className = 'ADDBUTTON' colorScheme ='blue' onClick = {createproducthandler}>ADD</Button>
            
        </div>
    )
}

export default Products
