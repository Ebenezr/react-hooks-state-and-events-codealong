import React,{useState} from "react";

function Toggle() {
  const [isOn, setIsOn]=useState(fasle);
  const handleEvent=()=>{
    setIsOn.useState(isOn);
  }
  return <button onClick={handleEvent}>OFF</button>;
}

export default Toggle;
