import React from 'react';
import Button from '../../../Reusable Components/Buttons/Button';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    // <button
    //   className="btn btn-lg btn-danger center modal-button"
    //   ref={buttonRef}
    //   onClick={showModal}
    // >
    //   {triggerText}
    // </button>
    <Button buttonText="Post Request" style={{width:"120px"}} onClick={showModal} ref={buttonRef} />
  );
};
export default Trigger;
