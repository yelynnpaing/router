import React from 'react'
import {useSearchParams} from "react-router-dom";
import {useRef} from "react";

const About = () => {
  const [query , setQuery] = useSearchParams();
  const inputRef = useRef();
  const handleClick = () => {
    setQuery({name: inputRef.current.value});
  }
  console.log(query.get("name"))
  return (
    <div className='container'>
      <div>{query.get("name")}</div>
      <input ref={inputRef} type="text"/>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default About