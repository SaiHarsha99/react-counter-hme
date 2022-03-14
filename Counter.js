import React, {useState, useEffect} from 'react'

const Counter = () => {
  let cnt = 0
  if(localStorage.getItem('countValue')) {
    cnt = Number(localStorage.getItem('countValue'))
  }
  let [count,setcount] = useState(cnt)

  useEffect( () => {
    setLocalStorage('countValue',count)
  },[count])


  let stepfromstorage = 1
  if(localStorage.getItem('stepValue')) {
    stepfromstorage = Number(localStorage.getItem('stepValue'))
  }
  let [step,setstep] = useState(stepfromstorage)

  useEffect( () => {
    setLocalStorage('stepValue',step)
  },[step])

  const customHook = (stateVal, state) => {
    let [store, setStore] = useState(state)

    useEffect( () => {
      setLocalStorage(stateVal,store)
    },[])

    return store
  }

  const setLocalStorage = (item,value) => {
    // console.log(item,value)
    localStorage.setItem(item,value)
  }

  const handleCountChange = (operator) => {
    if(operator === 'plus') {
      setcount(count+step)
      // localStorage.setItem('countValue',count+step)
    } else {
      setcount(count-step)
      // localStorage.setItem('countValue',count-step)
    }
  }

  const handleStep = (e) => {
    if(e.target.value) {
      setstep(Number(e.target.value))
      // localStorage.setItem('stepValue',Number(e.target.value))
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