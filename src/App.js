//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Alert } from 'bootstrap';
// import { useState } from 'react';
 import AddUser from './AddUser';
 import Listuser from './Listuser';
//  import Add from './Add';

function App() {
  // const[data, setData] = useState(0);
  //   function upData(){

  //     setData( data+1)
  //   }
  // console.log(data);
  return (
   <div className="container">
            <Listuser/>
      <AddUser/>
     {/* <Add/> */}
    </div>

  );
}
export default App;
