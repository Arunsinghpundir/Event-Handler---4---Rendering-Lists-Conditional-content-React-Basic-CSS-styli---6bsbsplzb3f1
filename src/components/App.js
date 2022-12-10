import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
    switch(event.detail){
      case 1: console.log("I was not double clicked"); break;
      case 2: console.log("I was double clicked"); break;
    }
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
