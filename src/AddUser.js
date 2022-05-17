import './App.css';
import React from 'react';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function AddUser() {
  const [fname, setFname] = useState("");
  const [lname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [id_no, setId_no] = useState("");
  const [address, setAdd] = useState("");

  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost/PHPReact/add_user.php",
        {
          method: "POST",
          headers: {
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            gender: gender,
            role: role,
            city: city,
            state: state,
            id_no: id_no,
            address: address,
          }),
        });
      let resJson = await res.json();
      if (res.status === 200) {
        setFname("");
        setName("");
        setEmail("");
        setPhone("");
        setGender("");
        setRole("");
        setCity("");
        setState("");
        setId_no("");
        setAdd("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input type="text" name="fname" value={fname} id="fname"
            onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input type="text" name="lname" value={lname} id="lname"
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input type="text" name="email" value={email} id="email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Phone Number</label>
          <input type="text" name="phone" className="form-control" id="phone"
            value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Gender</label>
          <input type="text" name="gender" className="form-control" id="gender"
            value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>User Role</label>
          <input type="text" name="role" className="form-control" id="role"
            value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>City</label>
          <input type="text" name="city" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>State</label>
          <input type="text" name="state" className="form-control" id="state"
            value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>ID Number</label>
          <input type="text" name="id_no" className="form-control" id=""
            value={id_no} onChange={(e) => setId_no(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Address</label>
          <input type="text" name="address" className="form-control" id="address" value={address} onChange={(e) => setAdd(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" name="submit" >Sign Up</button>
      </form>
    </div>
  );
}

export default AddUser;