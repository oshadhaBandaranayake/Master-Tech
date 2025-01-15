import NaviBar from './Elements/NaviBar'
import Home from './pages/Home'
import About from './pages/About/About'
import Shop from './pages/Shop'
import Contactus from './pages/Contactus/Contactus'
import Productpage from './pages/Product/Productpage'
import Cartpage from './pages/Cart/Cartpage'
import Footer from './pages/Footer/Footer'
import LoginScreen from './pages/Login/LoginScreen'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import ScrollIntoView from "./Elements/ScrollBar";
import HashLoader from "react-spinners/HashLoader";
import RegUserDis from './Elements/RegUserDis'
import CustomerDis from './Elements/CustomerDis'
import Checkout from "./pages/checkout/Checkout";
import Placeorder from './pages/placeorder/Placeorder'
import Order from './pages/Order/Order'
import Users from './pages/Userslist/Users'
import NotFoundPage from './Elements/NoResult'
import Edituser from './pages/Useredit/Edituser'
import Products from './pages/products/products'
import ProEdit from './pages/ProEdit/ProEdit'
import Orders from './pages/Orders/Orders'


 const App = () => { 
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])

  return (
    <div className = 'main'>
<ChakraProvider>
       <Router>
         <ScrollIntoView>
         {loading ?   
            <div className='loading'>
                 <HashLoader   color={"#1e1e2c"}  loading={loading} size={40} />
            </div>
          :
         <>
                 <NaviBar/>
                 <Switch>              
                 <Route path="/" exact component={Home}/>
                 <Route path="/about" component={About}/>
                 <Route path="/shop" component={Shop}/>
                 <Route path="/contactus" component={Contactus}/>
                 <Route path="/product/:id" component={Productpage}/>
                 <Route path="/cart/:id?" component={Cartpage}/>
                 <Route path="/login" component={LoginScreen}/>
                 <Route path="/register" component={RegUserDis}/>
                 <Route path="/profile" component={CustomerDis}/>
                 <Route path="/shipping" component={Checkout}/>
                 <Route path="/placeorder" component={Placeorder}/>
                 <Route path="/order/:id" component={Order}/>
                 <Route path="/admin/userlist" component={Users}/>
                 <Route path="/admin/productlist" component={Products}/>
                 <Route path="/admin/orderlist" component={Orders}/>
                 <Route path="/search/:keyword" component={Shop}/>
                 <Route path="/admin/user/:id/edit" component={Edituser}/>
                 <Route path="/admin/product/:id/edit" component={ProEdit}/>
                 <Route component={NotFoundPage} />

                 </Switch>
                 <Footer/>
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    </div>
     
    
  )
}
export default App;
