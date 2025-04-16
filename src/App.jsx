import { useState } from 'react'
import './App.css'
import ButtonGrid from './components/ButtonGrid.jsx';
import DisplayContainer from './components/DisplayContainer.jsx';


function App() {

  const [isNotSubmitted, setIsNotSubmitted] = useState(false);
  
  const handleSubmission = () => {
      setIsNotSubmitted(!isNotSubmitted);
    }
  
  const [inputDisplay, setInputDisplay] = useState([]);
  const [equation, setEquation] = useState([]);

  
  function handleClick(e) {
    const buttonVal = e.target.value;
    setInputDisplay([...inputDisplay, buttonVal]);
    console.log("The " + buttonVal + " button has been clicked");
  }

  function handleBackSpace(){
    
  }

  return (
    <div className="face aligncontent">
      <DisplayContainer className="display-container" inputDisplay={inputDisplay} compResult={"20"}/>
      <ButtonGrid handleEvent={handleClick}/>
    </div>
    
  )
}

export default App
