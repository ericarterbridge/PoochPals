import React from 'react';
import "./Login.css";

function Login() {
    const signIn = () => {
        // sign in...
    }
  return (
    <div className="login">
        <div className="login_logo">
            {/* img here 2:53 */}
        </div>
        <button type='submit' onClick={signIn}
        >
            Sign In
        </button>
    </div>
  )
}

export default Login