import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Page1 extends Component {
  render() {
    return (
      <div>
      <p>hi from page 1 </p>
        <Link to ='/'>Home</Link>
          <br></br>
        <Link to ='page2'>Page 2</Link>
      </div>
    );
  }
}

export default Page1;
