import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>FreeCoders</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        <Login/>
    </div>
  )
}

function Login(){
  return(

    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
       
        <div>
          <input type="text" name="username" id="" placeholder='Usernames'
          className='infoInput' />
        </div>
        <div>
        <input type="password" name="password" id="" placeholder='Password'
          className='infoInput' /> 
          
        </div>
        <div>
            <span style={{fontSize:'12px'}}>Don't have an account Sign up</span>
            <button className='button infoButton' type='submit'>Login</button>

          </div>
      </form>
    </div>

  )
}

function Signup(){
  return(

    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input type="text" name="firstname" id="" placeholder='First Name'
           className='infoInput' />
           <input type="text" name="lastname" id="" placeholder='Last Name'
           className='infoInput' />
        </div>
        <div>
          <input type="text" name="username" id="" placeholder='Usernames'
          className='infoInput' />
        </div>
        <div>
        <input type="password" name="password" id="" placeholder='Password'
          className='infoInput' /> 
           <input type="password" name="cpassword" id="" placeholder='Confirm Password'
          className='infoInput' />
          
        </div>
        <div>
            <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
          </div>
          <button className='button infoButton' type='submit'>Signup</button>
      </form>
    </div>

  )
}
export default Auth