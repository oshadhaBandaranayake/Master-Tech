import React, {useState, useEffect,useRef} from 'react'
import {Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ProfLogo from './img/logo.png'
import { Helmet } from 'react-helmet';
import {getUserDetails, updateUserProfile} from '../function/userActions'
import {listMyOrders } from '../function/orderActions'
import ProfPic from "./img/ProfPic.jpg"
import './CustomerDis.css'
import { AiOutlineEdit } from 'react-icons/ai'


const CustomerDis = ({location, history}) => {
  const [name,setName] = useState('')
  const [ShowOrders] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [message,setMessage] = useState(null) 
  const [isEditablename,setisEditablename] = useState(false) 
  const [isEditableemail,setisEditableemail] = useState(false) 

  const nameinput = useRef(null)
  const emailinput = useRef(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)

  const { error, user } = userDetails


  const userLogin = useSelector(state => state.userLogin)

  const {userInfo } = userLogin



  const userUpdateProfile = useSelector(state => state.userUpdateProfile)

  const {success } = userUpdateProfile

  const orderMylist = useSelector(state => state.orderMylist)

  const { } = orderMylist

  useEffect(() => {
    if(!userInfo) {
      history.push('/login')
    }else{
        if(!user.name)
        {
            dispatch(getUserDetails('profile'))
            dispatch(listMyOrders())
        }else{
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Password do not match')
    }
    else{
        dispatch(updateUserProfile({ id:user._id, name, email, password }))
    }
    
  }
  const inputs = document.querySelectorAll(".inputa");


  function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  
  function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value === ""){
      parent.classList.remove("focus");
    }
  }
  
  const nameinputfocus = () =>{
    setisEditablename(!isEditablename)
    if(isEditablename){
      nameinput.current.focus()        
    }else{

    }
  }
  
  inputs.forEach(inputa => {
    inputa.addEventListener("focus", addcl);
    inputa.addEventListener("blur", remcl);
  });
 



    return (

    <div className="profileSc">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      
    <div className="containerb">          
		<div className="imgb">
			<Image src={ProfLogo} style={{ width: '40%', height: 'auto', margin:"auto"}} />
		</div>
    <div className = 'rightinfos'>
    
    <>
    {!ShowOrders ? 
		<div className= 'profile-content'>
			<form onSubmit={submitHandler}>
				<Image src={ProfPic} style={{ width: '100px', height: 'auto', borderRadius:"50%", margin:"auto"}} />
				{error && <h4>{error}</h4>}
                {success && <h4>Profile Updated</h4>}
                



                <div className="input-div one">
                       <div className="i">
           		   		<i className="fas fa-user" style={{color:"white"}}></i>
           		   </div>
                   <div className="div">
           		   		
           		   		<input type="text"  style={{color:"white"}} value={name} readOnly = {isEditablename} ref = {nameinput} className="inputa" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
           		   </div>

           		</div>
               <AiOutlineEdit size ='26' style={{color:"white"}} className = 'edit' onClick = {nameinputfocus}/>

               



           		<div className="input-div one">
                       

           		   <div className="i">
           		   		<i className="fas fa-envelope" style={{color:"white"}}></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" style={{color:"white"}}  value={email} readOnly = {isEditableemail} ref = {emailinput} className="inputa" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
                  
           		</div>
               <AiOutlineEdit size ='26' style={{color:"white"}} className = 'edit' onClick = {()=>{setisEditableemail(!isEditableemail)
              emailinput.current.focus()
              }}/>



                

           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock" style={{color:"white"}}></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" style={{color:"white"}} value={password} required className="inputa" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
            	   </div>
            	</div>


                <div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock" style={{color:"white"}}></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" style={{color:"white"}} value={confirmPassword} className="inputa" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            	   </div>
            	</div>
              
                {message && <h4 className = 'Message'>{message}</h4>}
                <input type="submit"  style={{backgroundColor: "#0c7cd7"}} className="btna2" value="Update"/>
               
            	
                
              
            </form>
        </div>
         :
         <div className = 'tableorder'>

         </div>
         }
        </>
      </div>
    </div>
        </div>
    )
}

export default CustomerDis
