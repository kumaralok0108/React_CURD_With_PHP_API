//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Adduser from './AddUser';
import { useEffect, useState } from 'react';
import  axios from 'axios';

function Listuser() {
// const axios = require('axios').default;
// Hook for landing Page record 
  const [userData, setUser] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost/PHPReact/react_view.php");
    setUser(result.data.phpresult)
    console.log(result);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
   <div className="container">
      <h3>Here is a List of Student with join table</h3>
      <span style={{ color: 'red', float: "right" }}>  <a href="">Add New Student</a></span>

      <table className="container" style={{ border: "1px solid black" }}>
        <thead style={{ border: "1px solid black" }}>
          <tr>
            <th>St Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll No</th>
            <th>Phone No</th>
            <th>Email ID</th>
            <th>address</th>
            <th>city</th>
            <th>state</th>
            <th>ID No</th>

            <th style={{ color: 'red', float: "right", padding: "0 12%" }}>Action</th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid black"}}>
        {userData.map((res,asd)=> 
          <tr key={asd}>
            <td>{res.id}</td>
            <td>{res.fname}</td>
            <td>{res.lname}</td>
            <td>{res.email}</td>
            <td>{res.phone}</td>
            <td>{res.gender}</td>
            <td>{res.role}</td>
            <td>{res.city}</td>
            <td>{res.state}</td>
            <td>{res.id_no}</td>
            <td style={{ color: 'red', float: "right" }}><a href="edit?id={res.id}">edit</a> |
              <a href="">Delete</a></td>
          </tr>
          )}
        </tbody>

      </table>

    </div>

  );
}
export default Listuser;
