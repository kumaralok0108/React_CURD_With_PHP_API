import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Add extends Component{
  
  render(){
  return(
<div className="container">
      <form onSubmit={this.handleSubmit}>
        <div className="left">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input type="text" name="fname" className="form-control" 
            onChange={this.handleChange} id="fname" />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="text" name="lname" className="form-control" onChange={this.handleChange} id="lname" />
          </div>
          
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
      </form>
    </div>
); }
}
export default Add;