import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
function Login() {
  return (
    <>
      <div class="login-form">
        <form>
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input type="email" placeholder="Email" autocomplete="nope" />
            </div>
            <div class="input-field">
              <input
                type="password"
                placeholder="Password"
                autocomplete="new-password"
              />
            </div>
            <a class="link">Don't have account? <Link to='/signup'>Register Now!</Link></a>
          </div>
          <div class="action">
            <button>
              Sign Up
            </button>
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
