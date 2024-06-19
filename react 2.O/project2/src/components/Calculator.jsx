const Calculator = (props) => {

    return (
      <>
        <h1>this is a calculator</h1>
        <h2>the ans is {parseInt(props.num1) + parseInt(props.num2)}</h2>
      </>
    )
  }

  export default Calculator