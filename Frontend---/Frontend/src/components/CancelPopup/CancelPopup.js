import React, { useEffect } from 'react'
import ReactModal from 'react-modal';
import { useState } from 'react';
import Alertmodal from './AlertModal'
import './CancelPopup.css';
import { computeHeadingLevel } from '@testing-library/react';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function Cancel({showModal, setShowModal,clothesCount}) {
    console.log(clothesCount);
    const [isModalOpen, setIsModalOpen] = useState(showModal);
    const [totalPrice, setTotalPrice] = useState(0)
      const closeModal = () => {
        setShowModal(!showModal);
      };
      const [showComponent, setShowComponent] = useState(false);
      const handleClick = () => {
        setShowComponent(!showComponent);
        // closeModal();
      }; 
      const arr = ["shirt",
      "tshirt",
      "jeans",
      "trouser",
      "joggers",
      "boxers"]
      useEffect(() => {
let total=0

        Object.entries(clothesCount).map(([key,{quantity, wash}]) => {
          total =total+(quantity*10)
          console.log("hhhhh",total)
        })
        setTotalPrice(total)
      }, [])
      
 
  return (
    
    <div>

   <ReactModal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Example Modal"
  style={{
    content: {
      width: '65vw',
      height: '85vh',
      position: 'fixed', right:'60%', left: '64.5%', top: '47%', transform: 'translate(-50%, -50%)',

    }
  }}
>
  <h2 className='summary'>Summary</h2>
  <div className='adress'>
   <p>Store Location <br/>Jp Nagar</p>
   <p>Store Address: <br/>Near Phone booth, 10th road,</p>
   <p>Phone <br/>91 9999999999</p>
  </div>
  <div class="tracking-bar">
  <div class="tracking-step active">
    <div className='circle_1'></div>
    <div class="step-name">Picked Up</div>
    
  </div>
  <div class="tracking-step">
  <div className='circle'></div>
    <div class="step-name">Washed</div>
   
  </div>
  <div class="tracking-step">
  <div className='circle'></div>
    <div class="step-name">Ironed</div>
  </div>
  <div class="tracking-step">
  <div className='circle'></div>
    <div class="step-name">Delivered</div>
  </div>
</div>
{Object.entries(clothesCount).map(([key,{quantity, wash}]) => {
  let name=""
  arr.forEach((ar)=>{
    if(key === ar) name= ar
  })
  if(quantity)
 return <div className='adress'>
  <p>{name}</p>
   <p> {wash.join()}</p>
   <p>{quantity} X 10 =  {quantity * 10}</p>
  </div>
})}
<div>
<div className='total-price'>
   <p>Total: RS {totalPrice} </p>
  </div>
<button onClick={()=>handleClick()} className='cancel-proceed-button'>Cancel Order</button>
{showComponent && <Alertmodal showalert={showComponent} setshowalert={setShowComponent}/>}
</div>
</ReactModal>
    </div>
  )
}
export default Cancel

