import React from 'react'

const Childc = (props) => {
  return (
    <>
        <button onClick={()=>{props.onnamechange()}}>Change Name</button>
    </>
  )
}

export default Childc