import React , {useRef,useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Route } from 'react-router-dom';
import {Link, NavLink } from 'react-router-dom'
import { Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {IoSearchCircleOutline,BsArrowRightShort,MdKeyboardArrowRight,AiOutlineLogout,IoMdArrowDropdown,TiShoppingCart,FaUserCog } from "react-icons/all"
import {logout} from '../function/userActions'
import NaviSearch from './NaviSearch';
import logoImage from './logo.png';

 const NaviBar = ({history}) => {
    const [incart,setincart] = useState(0);
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    const[nav,setNav]=useState(false)
    const NaviBar = useRef(null)

     const searchRef = useRef(null)
     const [showSearchIc,setShowSearchIc] = useState(false)
     const Buric = useRef(null)
     const navLinks = useRef(null)
     const rightItems = useRef(null)
     const [signin,setSignin] = useState(null)





     const onSeacrhFun= () =>
        {

            setShowSearchIc(!showSearchIc) 
            console.log(showSearchIc)
            searchRef.current.classList.toggle('searchActive')
            searchRef.current.style.animation = 'moving 0.3s ease both 0.3s'
        }  
        const onDelSeacrh =  () =>{
            
            setShowSearchIc(!showSearchIc)
            searchRef.current.classList.toggle('searchActive')

        }

        const onBurgActive = () =>{
        

            const links = document.querySelectorAll('.navLinks li')
            navLinks.current.classList.toggle('burgerActive')
            rightItems.current.classList.toggle('burgerActive')
     
            links.forEach((link,index) => {
             if(link.style.animation)
                  {
                        link.style.animation = "";
                        rightItems.current.style.animation = "";
                   }
                else 
                    {         
                        link.style.animation = `moving 0.5s ease forwards ${index / 5 }s`
                        rightItems.current.style.animation = `moving 0.5s ease forwards ${index / 5 }s`
                    }
            });

            Buric.current.classList.toggle('toggle')
        }
        const onChangeBack= () =>{
            if(window.scrollY >= 60){
               setNav(true)
            }
            else  setNav(false)
        }
        window.addEventListener('scroll',onChangeBack)

        useEffect(() => {
            const cart = cartItems.length ? cartItems.length : 0 ;
            setincart(cart);
            return () => {
                setincart(0)
            }
        },[cart])


        const dispatch= useDispatch()
        const userLogin = useSelector(state => state.userLogin)
        const {userInfo} = userLogin
        
        const logoutHandler = () => {
            dispatch(logout())
        }
    
    return (
       <nav ref = {NaviBar}  className={`nav ${nav ? 'active' : ''}`} >
           <div className="barLogo">
            <Link to =''><img src={logoImage} alt="MasterTech Logo" /></Link>
           </div>

           <ul className="navLinks" ref={navLinks}>
            <NavLink to="/" ><button>Home</button></NavLink>
            <NavLink to="/shop"><button>Store</button></NavLink>
            <NavLink to="/about"><button>About us</button></NavLink>  
            <NavLink to="/contactus"><button>Contact us</button></NavLink>
            </ul>

            <div className="burger" ref= {Buric} onClick = {onBurgActive} >
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
        <div className = "rightComp" ref = {rightItems}>
        <div  ref={searchRef} className="search">
        <Route render={({history}) => <NaviSearch history ={history}/>}/>
        </div>

                { !showSearchIc && <IoSearchCircleOutline className='iconSearch' size='25' onClick={onSeacrhFun}/>  }
                <Link to='/cart' > <TiShoppingCart className='iconCart' size='25' />
                {userInfo && !userInfo.isAdmin && 
                <div className='dotcart'>
                    {incart}
                </div>
                }

                 </Link>

                            {userInfo ? (<div className="ic_sett_dis"><Link to="/profile"><FaUserCog  size="25" className="settingIcon"/></Link>
                                <AiOutlineLogout size='28' className="displayIcon" onClick={logoutHandler}/>
                                </div>
                                
                            ) : <Link to='/login' > <div className='signin' onMouseOver={ () => setSignin(!signin)}  onMouseOut={ ()=> setSignin(!signin) }  > Sign in 
                            { !signin ? <BsArrowRightShort  size='25'/>  : <MdKeyboardArrowRight size='25'  /> }

                        </div>
                        </Link>}
                        
                        {userInfo && userInfo.isAdmin && (
                            <Menu >
                                  <MenuButton as = {Button}  rightIcon={<IoMdArrowDropdown />} style={{ backgroundColor: 'rgba(82, 78, 78, 0.288)', color: 'white' } }   
                                    px={4}
                                    py={2}
                                    transition='all 0.2s'
                                    borderRadius='md'
                                    borderWidth='1px'
                                    _hover={{ bg: 'gray.400' }}
                                    _expanded={{ bg: 'blue.400' }}
                                    _focus={{ boxShadow: 'outline' }}
                                    >
                                      Admin
                                  </MenuButton>

                                  <MenuList style={{ backgroundColor: 'rgba(82, 78, 78, 0.288)', color: 'white', padding: '0', margin: '0' }} borderRadius='10px'>
                                    <MenuItem _hover={{ bg: '#04bdf5' }} borderRadius='10px 10px 0 0' style={{ margin: '0', padding: '0' }}>
                                        <Link to='/admin/productlist' style={{ display: 'block', width: '100%', padding: '8px' }}>
                                            Products
                                        </Link>
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: '#04bdf5' }} borderRadius='0 0 10px 10px' style={{ margin: '0', padding: '0' }}>
                                        <Link to='/admin/orderlist' style={{ display: 'block', width: '100%', padding: '8px' }}>
                                            Orders
                                        </Link>
                                        </MenuItem>
                                    </MenuList>
                            </Menu>
                        )}
            
        </div>
       </nav>
    )                   
}
export default NaviBar                      