import { useState } from "react";
import style from './App.module.css'



function App() {

  const [count , setCount] = useState(0)
  const cardValues = [30,33,89,100];
  const [pickedValue, setPickedValue] = useState(null)



  

  const handleIncrement = (num) => {
    setCount((prevCount) => prevCount + num)
  }

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
  }


  return (
    <>
    <div>
  <h2>Count : {count}</h2>
<button onClick={() => handleIncrement(1)}>Increment</button>
<button onClick={() => handleDecrement(1)}>Decrement</button>
<button onClick={reset}>Reset</button>
  </div>
  <IsOddorEven count={count} pickedValue={pickedValue} />
  <RandomCard setPickedValue={setPickedValue} cardValues={cardValues}/>
  </>
  )
}

function IsOddorEven ({count, pickedValue}) {
  const oddEven = pickedValue % 2 === 0? 'Even': 'Odd'
  
  return <h3>Number Is {pickedValue && (<span className={oddEven === 'Even'? style.even : style.odd}>{oddEven}</span>)}</h3>
 

}

function RandomCard ({cardValues, setPickedValue}) {
  return (
    <div className="flex">
      {cardValues.map((cardValue,index)=>{
        return <div onClick={()=> setPickedValue(cardValue)} className={style.random} key={index}>{cardValue}</div>
      })}
    </div>
  )
}

export default App;
