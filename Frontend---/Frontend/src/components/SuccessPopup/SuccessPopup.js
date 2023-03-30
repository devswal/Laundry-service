import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

function SuccessPopup({ showalert,setshowalert }) {
  const [isOpen, setIsOpen] = useState(showalert);
  const handleClose = () => {
    setIsOpen(!showalert);
  };

  return (
    <div>
      <ReactModal
  isOpen={isOpen}
  onRequestClose={handleClose}
  style={{
    content: {
      width: '15vw',
      height: '50vh',
      position: 'fixed', right:'60%', left: '50.5%', top: '50%', transform: 'translate(-50%, -50%)',
    }
  }}
>
        <div >
          <div> 
            {/* <img src={doneimg}></img> */}
          {/* <h3 className='alert-heading'>GREAT!</h3> */}
          <svg className='done-img' width="44px" height="44px" viewBox="0 0 24 24" id="d9090658-f907-4d85-8bc1-743b70378e93" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg"><title>prime</title><path id="70fa6808-131f-4233-9c3a-fc089fd0c1c4" data-name="done circle" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"/></svg>
          <h4 className='successfull'>Your order is successfully.</h4>
            <p className='alert-content'>You can track the delivery in the "Orders" section.</p>
            <Link to="/pastorder">
            <button className='proceed_button' onClick={handleClose}>
              Proceed
            </button>
      </Link>
          </div>
        </div>
        </ReactModal>
        </div>
    
  );
}

export default SuccessPopup;
