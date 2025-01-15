import React from 'react'
import { useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../function/cartActions';
import CartEmpty from '../../Elements/CartEmpty';
import Procart from '../../Elements/Procart';
import './cartcss.css'
const Cartpage = ({match,location,history}) => {
    const {id} = match.params;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))}
    },[dispatch,id,qty])

    const checkoutHandler =()=>{
        history.push('./login?redirect=shipping');
    }

    return (
        <>
        <Helmet>
            <title>Cart</title>
        </Helmet>
        {cartItems.length === 0 ? 
        <CartEmpty />
        :
        <div className ='cartfull'>
        <div className = 'cart'>
            <h1>Cart Items : {cartItems.length}</h1>
            <div className ='productsoncart'>
            {cartItems.map(product =>(
                    <Procart product = {product} />
                ))}
            </div>

        </div>
        <div className = 'totalcart'>
            <h3 className = 'totalprice'>Total :</h3>
            {new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(
    cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  )}
            <button className = 'checkoutbtn' disabled={cartItems.length===0} onClick={checkoutHandler}>
            CHECKOUT
            </button>
        </div>

        </div>
        }
        </>
    )
}

export default Cartpage
