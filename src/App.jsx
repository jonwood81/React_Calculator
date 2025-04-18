import { useState } from 'react'
import './App.css'
import ButtonGrid from './components/ButtonGrid.jsx';
import DisplayContainer from './components/DisplayContainer.jsx';
import Button from './components/Button.jsx';
import sound from './assets/sound.mp3';

function App() {

  const [isNotSubmitted, setIsNotSubmitted] = useState(false);
  
  const handleSubmission = () => {
      setIsNotSubmitted(!isNotSubmitted);
    }
  
  const [inputDisplay, setInputDisplay] = useState('');
  const [equation, setEquation] = useState('');

  const btnSound = new Audio(sound);
  const playBtnSound = () => btnSound.play();

  function handleClick(e) {
    playBtnSound();
    const buttonVal = e.target.value;
    let displayCopy = inputDisplay + e.target.value;
    setInputDisplay(displayCopy);
    console.log("The " + buttonVal + " button has been clicked");
  }

  const handleBackSpace = () => {
    if(inputDisplay.slice(-1) === " "){
      setInputDisplay(inputDisplay.slice(0,-2));
      console.log("Current display was set to: " + inputDisplay.slice(0,-2));
    } else {
      setInputDisplay(inputDisplay.slice(0,-1));
      console.log("Current display was set to: " + inputDisplay.slice(0,-1));
    }
  }

  //this function is for testing/debugging purposes and should be taken out once the project is complete
  const testInConsole = () => {
    // reveals current state of the calculator's display
    let showRes = inputDisplay;
    console.log("Current Display state: " + showRes);
  }

  function operatorClick(operator) {
    //let proceedingOperatorCheck  = inputDisplay.slice(-2);
    let operators = ["+ ", "- ", "* ", "/ "];

    //console.log(proceedingOperatorCheck);

    if (inputDisplay === "" || operators.includes(inputDisplay.slice(-2))) {
      console.log()
      return;
    } 

    console.log("The operator clicked is: " + operator);
    console.log("current display: " + inputDisplay);
    const appendOperator = (opr8r) => {
      let opr8rBetweenSpaces = " " + opr8r + " ";
      setInputDisplay(inputDisplay + opr8rBetweenSpaces);
      console.log("new display: " + inputDisplay + opr8rBetweenSpaces);
    }
    appendOperator(operator);
  }


//Button({className, name, value, handleClick }) {

  return (
    <>
      <Button className="btn btn-lg btn-primary test" name="test" value="test" handleClick={testInConsole} />
      <div className="face aligncontent">
        <DisplayContainer className="display-container" inputDisplay={inputDisplay} deleteChar={handleBackSpace} compResult={"20"}/>
        <ButtonGrid handleClick={handleClick} handleOperation={operatorClick} />
      </div> 
    </> 
  )
}

export default App
