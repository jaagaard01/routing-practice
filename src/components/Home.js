import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {
  state = {
    name: '',
    password: '',
    email: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({...this.state});
    fetch('http://localhost:4000',{
      method:'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json' 
      }
    });
  };


  render() {
    console.log(this)
    return (
      <div>
          <p>hi from home</p>
          <Link to ='page1'>Page 1</Link>
          <br></br>
          <Link to ='page2'>Page 2</Link>
          <br></br>
          <form onSubmit={this.handleSubmit}>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" 
      id="exampleInputName" 
      aria-describedby="nameHelp" 
      placeholder="Enter Name"
      onChange={e => this.setState({name: e.target.value})} />
      <small id="nameHelp" class="form-text text-muted"></small>
    </div>
    
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Enter Password"
      onChange={e => this.setState({password: e.target.value})}/>
    </div>
    
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" 
      class="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Enter Email"
      onChange={e => this.setState({email: e.target.value})}/>
      <small id="emailHelp" class="form-text text-muted"></small>
    
    </div>
    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  </div>
      
    );
  }
}

export default Home;
