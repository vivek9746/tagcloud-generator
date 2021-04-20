import React,{useRef} from 'react'


function  Theword(props) {
    const  lef = useRef()
    return (
        <div >
            {props.word}
        </div>
    )
}


export default Theword;
