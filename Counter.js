import React, {useState} from 'react'

const Counter = () => {
  let [count,setcount] = useState(0)
  let [step,setstep] = useState(1)

  const handleCountChange = (operator) => {
    if(operator === 'plus') {
      setcount(count+step)
    } else {
      setcount(count-step)
    }
  }

  const handleStep = (e) => {
    if(e.target.value) {
      setstep(Number(e.target.value))
    } else {
      setstep('')
    }
  }

  return (
    <>
    {count}
    <br/>
    Step <input type='number' value={step} onChange={(e) => handleStep(e)}/>
    <br/>
    <button onClick={() => handleCountChange('plus')}>+</button>
    <button onClick={() => handleCountChange('minus')}>-</button>
    </>
  )
}

export default Counter;