
import './App.css'
import CustomButton from './CustomButton';

function App() {

  const handleClick=(e,name)=>{
    console.log("paragraph clicked",name,e);
    
  }
  function handleChange(e){
    // console.log("input change:- ", e.target.name, "->", e.target.value);
    
    const {name, value}=e.target
    console.log("input change detected :-", name , "=>", value);
    
  }
  return (
    <>
      {/* <p onClick={(e)=>console.log("p clicked",e)}>Click Here...</p> */}
      {/* <p onClick={handleClick}>Click Here</p>
      <p onDoubleClick={handleClick}>Double Click Here</p> */}

       <p onClick={(e)=>handleClick(e,"React")}>Click Here</p>
       <input type="text" name='username' onChange={handleChange}/>
        <input type="text" name='password' onChange={handleChange}/>

        <CustomButton value={'Hii'}
              clickMe={(e)=>{console.log("Custom button clicked")}}></CustomButton>
    </>
  )
}

export default App
