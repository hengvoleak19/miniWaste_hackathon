import React, { Component } from 'react';
import './signup.css';
class SignUp extends Component{
  render(){
    return (
      <div>
        <div class="top">
          <div class="header">
            <h1>Ready to join our community?</h1>
            <p>Live zero waste, Protect the nature, Save our Planet</p>
          </div>
          <form>
            <input type="email" name="email" placeholder="Email" />
            <br/>
            <br/>
            <input type="text" name="username" placeholder="Username" />
            <br/>
            <br/>
            <input type="password" name="password" placeholder="Password" />
            <br/>
            <br/>
            <button><a href="/">Submit</a></button>

          </form>
        </div>
      </div>
    )
  }
}
export default SignUp