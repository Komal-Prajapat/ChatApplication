import React from 'react'
import styled from 'styled-components'
import Link from 'react-router-dom'
const Register = () => {
  const handleSubmit =(event)=>{
event.preventDefault();
    alert("form")
  }

  const handleChange=()=>{

  }
  return (
    <div>
        <FromContainer>
            <form onSubmit={(event )=>handleSubmit(event)}>

                    <div>
                    <label htmlFor="">UserName</label>
                      <input type='text'
                      placeholder='Username '
                      name='username'
                      onChange={(e)=>handleChange(e)}
                      ></input>
                       <label htmlFor="">Email</label>
                      <input type='email'
                      placeholder='email '
                      name='email'
                      onChange={(e)=>handleChange(e)}
                      ></input>
                       <label htmlFor="">password</label>
                      <input type='password'
                      placeholder='password'
                      name='password'
                      onChange={(e)=>handleChange(e)}
                      ></input>
                       <label htmlFor="">password</label>
                      <input type='password'
                      placeholder='confirmpassword'
                      name='confirmpassword'
                      onChange={(e)=>handleChange(e)}
                      ></input>
<button type='submit'>Create Users</button>
<span>already have an account  ? </span><Link to="/login">Login</Link>
                    </div>

            </form>
        </FromContainer>
    </div>
  )
}

const FromContainer = styled.div ``
export default Register
