import React, { useState } from 'react';
import ReactModal from 'react-modal';

function Alertmodal({ showalert,setshowalert }) {
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
      width: '30vw',
      height: '30vh',
      position: 'fixed', right:'60%', left: '64.5%', top: '50%', transform: 'translate(-50%, -50%)',
    }
  }}
>
        <div >
          <div>
          <h6 className='alert-heading'>Alert</h6>
            <p className='alert-content'>Are you sure want to cancel the Order</p>
            <button className='proceed_button' onClick={handleClose}>
              Proceed
            </button>
          </div>
        </div>
        </ReactModal>
        </div>
    
  );
}

export default Alertmodal;
