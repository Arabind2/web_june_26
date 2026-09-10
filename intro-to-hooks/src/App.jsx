import { useState } from "react";

function App() {
  console.log("App component");
  //let count=0

const state=useState(12)  //[initial value, setState function] <-state->useState(initial value)
 //console.log("////",state);
// console.log("////",state[0]);
// console.log("////",state[1]);

 const[count, setCount]=state

  function increament() {
    count++;
    console.log("increasing count ", count);
    state[0]++;
    state[1](state[0]++)

    

    setCount(count+1)
      setCount(count+1)
        setCount(count+1)

    setCount(prevState=>{
      console.log("Prev state 1 count is :- ",prevState);
      console.log("count 1 is:- ", count);
      return prevState+1;
    })
    setCount(prevState=>{
      console.log("Prev state 2 count is :- ",prevState);
      console.log("count  2 is:- ", count);
      return prevState+1;
    })
    setCount(prevState=>{
      console.log("Prev state 3 count is :- ",prevState);
      console.log("count 3 is:- ", count);
      return prevState+1;
    })

    setCount(prevState=>prevState+1)
      setCount(prevState=>prevState+1)
    setCount(prevState=>prevState+1)

    console.log("increasing state ", count);

  }
 
  function increament2() {
    setCount(count+2)
        console.log("increasing state ", count);

  }

   function Decrease() {
    if(0==count){
      return 0
    }
    setCount(count-2)
        console.log("increasing state ", count);
      
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Counter App</h1>
      <br />
      <button onClick={increament}>Increase </button> <br /><br />
      <button onClick={increament2}>Increament2</button><br /><br />
     <button onClick={Decrease}>Decrease </button>
      <button>{count} </button><br /><br />

    </div>
  )
}

export default App
