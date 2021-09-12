import React, { Component } from 'react';
import './login.css';

class LogIn extends Component{

  state = {
    emial: '',
    password: '',
  }

  handleChange = (e) => {
    const {name, value} = e.target 
    this.setState({[name]:value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render(){
    return (
      <div>
        <div class="top">
          <div class="header">
            <h1>Ready to join our community?</h1>
            <p>Live zero waste, Protect the nature, Save our Planet</p>
          </div>
          <form>
            <input type="email" name="email" placeholder="Enter your email" required onChange={this.handleChange} />
            <br/>
            <br/>
            <input type="password" name="password" placeholder="Enter your password" required onChange={this.handleSubmit}/>
            <br/>
            <br/>
            <button onSubmit={this.handleSubmit}><a href="/">Login</a></button>
            <button><a href="/SignUp">Sign Up</a></button>

          </form>
        </div>
      </div>
    )
  }
}

export default LogIn