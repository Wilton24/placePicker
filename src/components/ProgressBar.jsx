import { useState, useEffect } from "react";

const TIMER = 3000;

export default function ProgressBar(){
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(()=>{
    const timerExpiration = setInterval(()=>{
    setRemainingTime((remainingTime) => remainingTime - 10);

    return ()=>{
      clearInterval(timerExpiration);
    }
  },10);
  }, [])  

  return (
    <>
      <progress value={remainingTime} max={TIMER} />
      {remainingTime <1100? <p>BOOOOOOOM! HAHA :p</p>: null}     
    </>

  )
}