import React from 'react';
import Calculator from "./components/Calculator";
import Name from "./components/Name";
import Description from "./components/Description";
import Greeting from "./components/Greeting";

function App() {
  const auth = true;
  return (
    <>
      <Name name="Nisarg Patel" />
      <Description />
      {auth && (
        <>
          <Calculator num1="5" num2="6" />
          <Greeting />
        </>
      )}
    </>
  );
}

export default App;