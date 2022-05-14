import React from 'react'
import '../css/Register.css'
function Register() {
  return (
    <>
    <h1 class="register-title">Register</h1>
  <form class="register">
    <input type="email" class="register-input" placeholder="Email address"/>
    <input type="username" class="register-input" placeholder="Username"/>
    <input type="password" class="register-input" placeholder="Password"/>
    <input type="submit" value="Create Account" class="register-button"/>
  </form>
    </>
  )
}

export default Register