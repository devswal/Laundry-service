import React,{useState} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';
import Signin from './components/signin/Signin/Signin';
import Register from './components/signin/Register/Register';
import OrderHome from './components/OrderHome/OrderHome';
import ViewOrder from './components/ViewOrder/ViewOrder';
function App() {

  const [username,setusername]= useState("username");
  const [email,setemail]= useState("username");

  console.log(username,email);
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Signin username={username} setusername={setusername} email={email} setemail={setemail}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/create' element={<Home username={username}  email={email}/>}></Route>
        <Route path='/order' element={<OrderHome email={email} username={username} />}></Route>
        <Route path='/pastorder' element={<ViewOrder />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
