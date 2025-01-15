import { Image } from '@chakra-ui/image'
import React,{useState,useEffect} from 'react'
import { VscChromeClose } from "react-icons/all";
import { removeFromCart } from '../function/cartActions';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';



const Procart = ({product}) => {
    const dispatch = useDispatch();

    const [qty] = useState(0)
    useEffect(() => {
        console.log(product.images)
        return () => {
        }
    },[])

  
    const removeFromCartHandler  = (id) =>{
        dispatch(removeFromCart(id))
    }
    return (
        <div className = 'productcart'>
            <div className = 'imagecart'>
            <Image objectFit="cover" src = {product.images[0]}/>

            </div>
                <div>
                    <Link to = {`/product/${product.product}`}>
                        <h2 className = 'productname'>
                            {product.name}
                        </h2>
                    </Link>

                </div>
                <div className = 'qtyoption' >
                <h1>
{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format((qty === 0 ? product.qty * product.price : qty * product.price).toFixed(2))}
</h1>
                </div>
                <VscChromeClose className = 'deletecart' size = '26' onClick = {() => removeFromCartHandler(product.product)} />



            
        </div>
    )
}

export default Procart
