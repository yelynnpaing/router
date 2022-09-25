import React from 'react';
import { useParams } from 'react-router-dom';

const  Contact = () => {
    const params = useParams();
    console.log(params)
  return (
    <div className="container">Contact id is {params.id}</div>
  )
}

export default Contact