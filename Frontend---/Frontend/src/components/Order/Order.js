import React from 'react'
import './Order.css'
import {Link } from "react-router-dom";
    
    const Order = () => {
      return (
        <div className='create__body'>
            <div className='create__topheader'>
                <div className='create__text'>
                    <h3>orders|0</h3>
                </div>
               </div>
                <div><p className='order-status'>No Orders available :</p>
                    <Link to='/create'>
                            <button className='create__btn'>Create</button>
                    </Link>
                </div> 
              
          
           
      </div>

  )
}
    export default Order
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import CancelPopup from '../CancelPopup/CancelPopup';
// import SummaryPast from '../SummaryPast/SummaryPast';
// import './Order.css'
// import eye from '../../images/view.png'
// const Order = () => {
//     let arr = ["Ready to Pickup ", "In Ironing", "Dispatched", "In Washing"];
//     const [status, setstatus] = useState(0);
//     const [index,setindex] = useState();
//     const [summary, setsummary] = useState(false);
//     const [popup, setpopup] = useState(false);
//     const [post, setpost] = useState([])
//     const [del, setdelete] = useState(false);
//     let x = Math.floor((Math.random() * 4) );
//     const myInterval = setTimeout(myTimer, 1000);
//     console.log(index%4);
//     function myTimer() {
//         setstatus(status + 1)
//     }
//     if (status === 3) {
//         clearInterval(myInterval);
//     }
//     const handle=()=>{
//         setpopup(true);
//         // setindex(true)
//     }
//     // const sendSummary=(e)=>{
//     //     // console.log(e.target.className);
//     //     // setid(e.target.className);
//     //     // setid()
//     //     setsummary(true)
//     // }
//     useEffect(() => {
//         fetch("http://localhost:8080/signin/pastorder").then((res) => {
//             return res.json();
//         }).then((data) => {
//             console.log(data);
//             setpost(data.data.reverse())
//         }).catch((err) => { console.log(err) })
//     }, [])
//     // const date = post.date.split("T");
//     return (
//         <div className='create__body'>
//             <div className='create__topheader'>
//                 <div className='create__text'>
//                     <h3>orders|0</h3>
//                 </div>
//                 <div className='create__surf'>
//                     {post.length >0 ?
//                         <Link to='/create'>
//                             <button className='create__btn__order'>Create</button>
//                         </Link>:
//                         (
//                             null
//                         )
//                     }
//                     <svg xmlns="http://www.w3.org/2000/svg" width="14.051" height="14.553" viewBox="0 0 14.051 14.553">
//                         <path id="search" d="M14.821,13.256l-3.464-3.6a5.874,5.874,0,1,0-4.5,2.1,5.813,5.813,0,0,0,3.366-1.063l3.49,3.63a.766.766,0,1,0,1.1-1.063ZM6.86,1.533A4.343,4.343,0,1,1,2.517,5.876,4.348,4.348,0,0,1,6.86,1.533Z" transform="translate(-0.984)" fill="#a0a0a0" />
//                     </svg>
//                 </div>
//             </div>
//             {post.length === 0 ?
//                 <div>No posts available
//                     <Link to='/create'>
//                             <button className='create__btn'>Create</button>
//                     </Link>
//                 </div> :
//                 (
//                     <table>
//                         <thead>
//                             <tr className='head'>
//                                 <th>Order id</th>
//                                 <th>Order Date & Time</th>
//                                 <th>Store Location</th>
//                                 <th>City</th>
//                                 <th>Store Phone</th>
//                                 <th>Total Items</th>
//                                 <th>Price</th>
//                                 <th>Status</th>
//                                 <th>View</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 post.map((items, index) => {
//                                     return (
//                                         <tr key={index} className="orders">
//                                             <td>OR0000{index+1}</td>
//                                             {/* <td>{id}</td> */}
//                                             <td>{items.date}</td>
//                                             <td>Jp nagar</td>
//                                             <td>City</td>
//                                             <td>34567890</td>
//                                             <td>{items.totalitems}</td>
//                                             <td>{items.total}</td>
//                                             {/* {!del ? */}
                                                
//                                                 <td className='status'>
//                                                     <div> {index%4 !== 0? arr[index%4]:del?null:<span className='pickup'>{arr[index%4]}</span>}</div> 
//                                                     <div> {index%4=== 0 && del ? <div><span className='cancel'>cancelled</span></div>: 
//                                                         index%4 === 0?<span className='cancel' onClick={() => {handle()}}>cancel</span> :null
//                                                     }</div>
//                                                 </td>
//                                             {/* } */}
//                                             <td onClick={()=>{setsummary(true);setindex(index)}} ><img src={eye} alt='eye' width='20px' height='20px'/></td>
//                                         </tr>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 )
//             }

//             {/* <div className='btns'> */}
//             {/* <button className='cancel-btn'>Cancel</button> */}
//             {/* <button className='proceed-btn' onClick={() => pop()}>Procced</button> */}
//             {/* </div> */}
//             {
//                 summary ?
//                     (
//                         <SummaryPast index={index} del={del} setsummary={setsummary} post={post} setpopup={setpopup} popup={popup} setdelete={setdelete}  />
//                     ) : (
//                         popup ?
//                             (
//                                 <CancelPopup setdelete={setdelete} popup={popup} setpopup={setpopup}></CancelPopup>
//                             ) :
//                             (
//                                 null
//                             )
//                     )
//             }
//         </div>

//     )
// }

// export default Order

