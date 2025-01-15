import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Helmet } from 'react-helmet';
import {register} from '../function/userActions'


const RegUserDis = ({location, history}) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [message,setMessage] = useState(null) 

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)

  const { error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Password do not match')
    }
    else{
        dispatch(register(name, email, password))
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
  
  
  inputs.forEach(inputa => {
    inputa.addEventListener("focus", addcl);
    inputa.addEventListener("blur", remcl);
  });
  




    return (
        <div className="registerSc">
          <Helmet>
            <title>
              Register
            </title>
          </Helmet>
          	

    <div className="containera">
              

		<div className="login-content">
      
			<form onSubmit={submitHandler}>
      <h1>Register</h1>
				{error && <h4>{error}</h4>}
                



                <div className="input-div zz" >
                       <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
                   <div className="div">
           		   		<input type="text" style={{color:"white"}} value={name} className="inputa" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
           		   </div>

           		   
           		</div>




           		<div className="input-div one">
                       

           		   <div className="i">
           		   		<i className="fas fa-envelope"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" style={{color:"white"}} value={email} className="inputa" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
           		</div>



                

           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input type="password" style={{color:"white"}} value={password} className="inputa" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
            	   </div>
            	</div>


                <div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" style={{color:"white"}} value={confirmPassword} className="inputa" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            	   </div>
            	</div>
                {message && <h4>{message}</h4>}
                <input type="submit" className="btna" value="Sign up"/>
                <br />
                Have an Account? {' '}
            	<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
            	
                
              
            </form>
        </div>
    </div>
        </div>
    )
}

export default RegUserDis
