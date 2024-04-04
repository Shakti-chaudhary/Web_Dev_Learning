// Counter with hooks 


import { useState } from "react";

    
function App() {

  let [data,setCounter] = useState(0);
  
  // let counter = 5;

  
  function addValue(){
     setCounter(data+1) 
  }
  function removeValue(){
    if (data>0) {
      setCounter(data-1) 
    }
  }
  
  return (<>

    <h1>Hello! Counter</h1>
    <h2>Conter value: {data}</h2>
    
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    {console.log("App is working")}
    </>)
}

export default App;

