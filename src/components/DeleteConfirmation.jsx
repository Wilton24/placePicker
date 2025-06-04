import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);


  useEffect(()=>{
    const timerExpiration = setInterval(()=>{
    setRemainingTime((remainingTime) => remainingTime - 10);

    return ()=>{
      clearInterval(timerExpiration);
    }
  },10);

  }, [])

  useEffect(()=>{
    const timer = setTimeout(()=>{
      onConfirm();
    },TIMER);

    return ()=>{
      clearTimeout(timer);
    }
  }, [onConfirm]);



  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}/>
      {remainingTime <1100? <p>BOOOOOOOM! HAHA :p</p>: null} 
    </div>
  );
}
