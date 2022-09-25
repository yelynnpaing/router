import React, {useRef, useState} from 'react';
import {link, useNavigate} from "react-router-dom";

const Home = () => {
    const nav = useNavigate ();
    const [text , setText] = useState("");
    const inputRef = useRef();
  const handleClick = () => {
      // inputRef.current.focus();
      // inputRef.current.value
      // console.log("hello")
      // nav("/services");
      nav("/services", {state:{text:inputRef.current.value}})
  };

  return (
    <div className='container'>
        <p>{text}</p>
        <input
            ref={inputRef}
            type="text"
            // value={text}
            // onChange={(e) => setText(e.currentTarget.value)}
        />
      <button onClick={handleClick} >To Services</button>
    </div>
  )
}

export default Home