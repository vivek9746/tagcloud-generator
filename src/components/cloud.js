import React, { useEffect, useRef, useState } from "react";
import "./cloud.css";

export default function Cloud(props) {
  let test = useRef();
  let [topVal,setTopVal]= useState(0);

  useEffect(() => {
    console.log(test.current.innerHTML, test.current.getBoundingClientRect());
    setTopVal(test.current.getBoundingClientRect().height);
    console.log('topval',topVal)
    test.current.style.setProperty('--size',props.freq+10);
  },);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = topVal;
    
  });
  
  const prevCount = prevCountRef.current;
  console.log()
  

  return (
      
    <span
      ref={test}
      className="cloud"
      style={{
        top: `${prevCount}px`,
        fontWeight: `${500 + 100 * props.freq}`,
        fontSize: `${2 * props.freq}em`,
      }}
    >
      {props.word}{prevCount}
    </span>
  );
}
