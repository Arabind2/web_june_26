import React, { useState } from 'react'

const Greet = ({name,children="children hun main"}) => {
  console.log("Greet componet",children);
  const[count,setCount]=useState(0)
  
  return (
    <div style={{border:'2px solid red',padding:'20px'}}>
    <h3>Child component</h3>
    <p>{name} says Good morning</p>
    <p>{count}</p>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    {children}
</div>
  )
}

export default Greet