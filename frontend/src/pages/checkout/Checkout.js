import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Input, Stack, Image, Link } from "@chakra-ui/react"
import './checkout.css'
import { saveAddressshipping,savepaymentmethod } from '../../function/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const Checkout = ({history}) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [Payment] = useState('Card')
    const dispatch = useDispatch()
    const [carddetails] = useState(true)
    const handleorder = (e)=>{
        e.preventDefault()
         dispatch(saveAddressshipping({ address, postalCode}))
         dispatch(savepaymentmethod(Payment))
         history.push('/placeorder')

    }
    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>

            <div className="limit-check">
                
                <div className="info-check">
                    <form onSubmit = {handleorder}>
                    <div className="billing-check">
                        <h1>Shipping Address</h1>
                        {}
                        <label for="address" className="this-label">Address</label><br />
                        <Input variant="flushed" placeholder="Your Address" required value ={address} id="address" onChange={(e) => setAddress(e.target.value)}/><br />
                        <Stack spacing={3}>
                            
                        </Stack>
                        <div className="city-cp-check">
                            <div><label for="zip" className="this-label" >Zip</label>
                            <Input variant="flushed" required placeholder="Your Zip" id="zip" onChange = {(e) => setPostalCode(e.target.value)}/></div>
                        </div>
                    </div>

                    <div className="payment-check">
                        <h1>Payment Details</h1>
                       
                        <label for="card" className="this-label">Card Details</label>
                        <div className="accept-cards-imgs">
                            <Image src="https://i.imgur.com/w1K88XP.png" />
                            <Image src="https://i.imgur.com/Y9KTTTG.png" />
                            

                        </div>
                        <div className = {carddetails ? 'detailsenable' : 'detailsdisable'}>
                        <div><label for="name-card" className="this-label">Name on Card</label><br />
                        <Input variant="flushed" id="name-card" /></div>
                        <div><label for="number-card" className="this-label">Credit card number</label><br />
                        <Input variant="flushed" id="number-card"  /></div>
                        <div><label for="expir-mt-card" className="this-label">Exp Month</label><br />
                        <Input variant="flushed" id="expir-mt-card"  /></div>
                        <div><label for="exp-year" className="this-label">Exp Year</label>
                        <Input variant="flushed"  id="exp-year"/></div>
                        <div><label for="cvv-check" className="this-label">Cvv</label>
                        <Input variant="flushed"  id="cvv-check"/></div>
                        </div>

                        
                        <div class="confirm">
                          <input type="submit" className="confirm-check" value="Confirm Order"/>
                        </div>
                    </div>
                    </form>
                    <div class="your-products">
                    <h1> Your Items</h1> : 
                    <>
                    <div className="cart-summ">
    {cart.cartItems.map((item, index) => (
        <p key={index}>
            {item.qty} X <Link to={`/product/${item.product}`}>{item.name}</Link>{" "}
            <b>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "LKR"
                }).format(item.qty * item.price)}
            </b>
        </p>
    ))}
</div>
                    </>
                
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Checkout
