import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

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
      position: 'fixed', right:'60%', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
    }
  }}
>
        <div >
          <div>
          <h6 className='cancel-alert-heading'>Alert</h6>
          <svg className='alert-image' width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75Z" fill="#F41313"/><path d="M12 18C11.94 18 11.87 17.99 11.8 17.98C11.74 17.97 11.68 17.95 11.62 17.92C11.56 17.9 11.5 17.87 11.44 17.83C11.39 17.79 11.34 17.75 11.29 17.71C11.11 17.52 11 17.26 11 17C11 16.74 11.11 16.48 11.29 16.29C11.34 16.25 11.39 16.21 11.44 16.17C11.5 16.13 11.56 16.1 11.62 16.08C11.68 16.05 11.74 16.03 11.8 16.02C11.93 15.99 12.07 15.99 12.19 16.02C12.26 16.03 12.32 16.05 12.38 16.08C12.44 16.1 12.5 16.13 12.56 16.17C12.61 16.21 12.66 16.25 12.71 16.29C12.89 16.48 13 16.74 13 17C13 17.26 12.89 17.52 12.71 17.71C12.66 17.75 12.61 17.79 12.56 17.83C12.5 17.87 12.44 17.9 12.38 17.92C12.32 17.95 12.26 17.97 12.19 17.98C12.13 17.99 12.06 18 12 18Z" fill="#F41313"/><path d="M18.06 22.16H5.93998C3.98998 22.16 2.49998 21.45 1.73998 20.17C0.989976 18.89 1.08998 17.24 2.03998 15.53L8.09998 4.63C9.09998 2.83 10.48 1.84 12 1.84C13.52 1.84 14.9 2.83 15.9 4.63L21.96 15.54C22.91 17.25 23.02 18.89 22.26 20.18C21.5 21.45 20.01 22.16 18.06 22.16ZM12 3.34C11.06 3.34 10.14 4.06 9.40998 5.36L3.35998 16.27C2.67998 17.49 2.56998 18.61 3.03998 19.42C3.50998 20.23 4.54998 20.67 5.94998 20.67H18.07C19.47 20.67 20.5 20.23 20.98 19.42C21.46 18.61 21.34 17.5 20.66 16.27L14.59 5.36C13.86 4.06 12.94 3.34 12 3.34Z" fill="#F41313"/></svg>
            <p className='cancel-alert-content'>Are you sure want to cancel the Order</p>
            <a href ='/pastorder'>
            <button className='cancel-proceed_button' onClick={handleClose}>
              Proceed
            </button>
            </a>
  
          </div>
        </div>
        </ReactModal>
        </div>
    
  );
}

export default Alertmodal;
