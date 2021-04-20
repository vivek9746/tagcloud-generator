import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const string_to_array = function (str) {
     return str.trim().split(" ");
  };

  const [arr, setArr] = useState([]);
  // let arr = string_to_array("What is Nutanix Enterprise Cloud? Nutanix Enterprise Cloud combines the agility and simplicity of the public cloud, with the security and control you need in a private cloud. Built on the industry’s leading hyperconverged infrastructure (HCI) technology, it integrates compute, storage, virtualization and networking in a full-stack solution that runs nearly any application. Why Nutanix? Only Nutanix delivers a single software OS that runs across clouds, making the boundaries between private, public and distributed clouds invisible. Nutanix solutions combine web-scale engineering with consumer-grade management to power any workload in multi-cloud environments. ONE-CLICK SIMPLICITY Reduce complex IT tasks to a single click, and lessen dependence on IT specialists. 100% SOFTWARE Manage one OS across multiple hardware platforms and all IT locations. FREEDOM OF CHOICE Pick the hardware, hypervisor and cloud that is best for your business. LOWER TCO Reduce IT expenses by as much as 40% to 60%, based on IDC research. FAST TIME TO VALUE Deploy and manage a complete infrastructure stack in minutes.")
  let [tarr,setTarr] =useState([])
  const [inputVal, setInputVal] = useState("");
  const canvasRef = useRef();
  let contextRef = useRef();

  function enterText(ele, i,len) {

    const text = ele[0];
    const freq = ele[1];
    contextRef.font = `${200 *(freq>=5?4.5:freq)} ${(20*(freq>5?5:freq))/20}em Arial`;
    contextRef.globalAlpha = `${freq>4?1:len<10?0.8:0.25*freq}`;
    console.log()
    contextRef.fillStyle = "#2F4F4F";
    let ht = Math.random() * 1000;
    let wd = Math.random() * 1000;
    console.log(ht,wd);
    contextRef.fillText(
      text,
      (wd>canvasRef.current.width-80?wd-80 :wd<30?wd+70:wd ),
      ht > canvasRef.current.height-30
        ? canvasRef.current.height / 2 + Math.random() * 100
        : ht<canvasRef.current.height-70?ht+40:ht
    );
  }

  function generateCloud() {
 
    if (inputVal !== "") {

      setTarr([])

      setArr(string_to_array(inputVal));      

    } else {
      alert("Please enter a value");
    }
  }
  useEffect(() => {
    
    let fc = {};
    for (let i = 0; i < arr.length; i++) {
      fc[arr[i]] = fc[arr[i]] ? fc[arr[i]] + 1 : 1;
    }    
    setTarr(Object.entries(fc));
    tarr.sort(function (a, b) {
      return b[1] - a[1];
    });

  }, [arr])
  
  useEffect(() => {
    
    console.log('new tarr',tarr);
   
  }, [tarr])

  useEffect(() => {
    // console.log(canvasRef);
    const canvas = canvasRef.current;
    // console.log(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef = canvas.getContext("2d");
    tarr.map((ele, i) => {
      enterText(ele, i,tarr.length);
    });
  }, [tarr]);

  return (
    <div className="App">
      <span className="spanParent">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value)
          }}
        />
        <button onClick={generateCloud}>Generate</button>
      </span>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
