import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Page2 extends Component {
  render() {
    return (
      <div>
      <p>hi from page 2</p>
        <Link to ='/'>Home</Link>
          <br></br>
        <Link to ='page1'>Page 1</Link>
      </div>
    );
  }
}

export default Page2;
