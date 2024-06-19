import React, { useState } from 'react';
import Childc from './Childc';

function Parentc() {
  const [name, setName] = useState("username");

  const changename = () => {
    setName("Nisarg Patel");
  };

  return (
    <>
      <div>Parentc</div>
      <h1>Name: {name}</h1>
      <Childc onnamechange={changename}/>
    </>
  );
}

export default Parentc;