import React,{useRef,useEffect} from 'react'
import './word.css';

export default function Word(props) {
   
    let refel = useRef();
    useEffect(() => {
        
        props.pref(refel);
        props.setprevHeight(refel.current.getBoundingClientRect())
        // console.log(props.prevheight);

      },[])
  
    

      
      
    return (
        <div className={props.className} ref={refel} style={{ top:`${props.top}px`,fontWeight:`${props.weight}`,fontSize:`${props.size}em`}}>
            <p>{props.wordval}</p>
        </div>
    )
}
