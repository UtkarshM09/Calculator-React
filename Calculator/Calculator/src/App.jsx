import './App.css';
import styles from "./App.module.css";
import ButtonsContainer from './ButtonsContainer';
import Display from './Display';
import { useState } from 'react';

function App() {
  const [calVal, setcalVal] = useState("");
  
  const onButtonClick = (buttonText) =>{
    if(buttonText === "C"){
      setcalVal("");
    }
    else if(buttonText === "="){
      const result = eval(calVal);//eval is used to calculate a math calculation enclosed within a string
      setcalVal(result);
    }
    else{ 
    const newDispVal = calVal + buttonText 
    setcalVal(newDispVal);  
    }
  } 
  return <div className={styles.calculator} id='calculator'>
        <Display dispValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}>
        </ButtonsContainer>
      </div>
    
}

export default App;
