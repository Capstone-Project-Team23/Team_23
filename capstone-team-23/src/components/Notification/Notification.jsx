import React from 'react'
import './Notification.css'
import { ToastContainer, toast } from 'react-toastify';
function Notification({text}) {
    const notification = () => toast.info(text, {
        });
  return (
    <>
        {notification()}
    </>
  )
}

export default Notification