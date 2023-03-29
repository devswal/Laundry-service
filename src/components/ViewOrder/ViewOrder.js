import React from 'react'
import { useState, useRef  } from 'react'
import {useEffect} from "react";
import "../ViewOrder/ViewOrder.css"
import UserData from './UserData';
import axios from 'axios'
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar';
import {Link} from "react-router-dom";

// const API = "https://jsonplaceholder.typicode.com/users";

// const orders = [{
//   orderID: "OR0001",
//   createdAt: "10Oct 2021 , !):15",
//   store: "Jp Nagar",
//   city: "Bangalore",
//   phone:"+91 99999999999",
//   total_items: 10,
//   price: 213,
//   status: "Cancelled"
// },{
//   orderID: "OR0002",
//   createdAt: "10Oct 2021 , !):15",
//   store: "Jp Nagar",
//   city: "Bangalore",
//   phone:"+91 99999999999",
//   total_items: 10,
//   price: 213,
//   status: "Cancelled"
// },{
//   orderID: "OR0003",
//   createdAt: "10Oct 2021 , !):15",
//   store: "Jp Nagar",
//   city: "Bangalore",
//   phone:"+91 99999999999",
//   total_items: 10,
//   price: 213,
//   status: "Cancelled"
// }]
  
function ViewOrder() {
  const [numoforder, setnumoforder] = useState(12)
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
      try {
          const res = await axios.get('http://localhost:8000')
          console.log("cfgvhbjnk",res)
          const data = res.data;
          if (data.length > 0) {
              setUsers(data);
          }
          console.log(data);
      } catch (e) {
          console.error(e)
      }
  }

  console.log("hgggggggggggggggggggg", users)
  useEffect(() => {
      fetchUsers();
  }, [])
  return (
    <>
    <div>
        <Header/>
        <Sidebar/>
     <p className='orders-count'>Orders | {numoforder}</p>
     <div >
     <svg className='search-img' xmlns="http://www.w3.org/2000/svg" width="14.051" height="14.553" viewBox="0 0 14.051 14.553">
  <path id="search" d="M14.821,13.256l-3.464-3.6a5.874,5.874,0,1,0-4.5,2.1,5.813,5.813,0,0,0,3.366-1.063l3.49,3.63a.766.766,0,1,0,1.1-1.063ZM6.86,1.533A4.343,4.343,0,1,1,2.517,5.876,4.348,4.348,0,0,1,6.86,1.533Z" transform="translate(-0.984)" fill="#a0a0a0"/>
</svg>

      <input className='search-bar' type="text"/>
     </div>
     <Link to ='/create'>
     <button className='create-button' type="button">Create</button>
            </Link>
     
     <table  className='table-body' >
            <thead>
            <tr>
                <th >Order ID</th>
                <th >Date & time</th>
                <th >Store Location</th>
                <th >City</th>
                <th >Store Phone</th>
                <th >Total Items</th>
                <th >Price</th>
                <th >Status</th>
                <th >View</th>
           
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ViewOrder