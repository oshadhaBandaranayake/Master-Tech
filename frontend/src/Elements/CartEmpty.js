import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightSLine  , BsArrowBarRight} from "react-icons/all";


const CartEmpty = () => {
    const [arrow, setarrow] = useState(false)
    return (
        <div className = 'Emptycart'>
            <div className = 'textempty'>
            <h1>
                Your Cart 🛒 is Cart Empty 😥
            </h1>
             
            <Link to = '/shop' className ='goshop' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
            Go Buy Some Product
            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
            </Link>
            </div>

            

        </div>
    )
}

export default CartEmpty
