import './App.css';
import logo from './images/logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculate = () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert('Por favor ingrese valores para realizar cálculos');
    }
  };

    return ( 
    <div className="App">
      {/* <div className='logoContainer'>
        <img
        src={logo}
        alt="Logo FreCodeCamp" />
      </div> */}
      
      <div className='calculatorContainer'>
        <Screen input={input} />
        <div className='line'>
          <Button manageClick={ addInput }>1</Button>
          <Button manageClick={ addInput }>2</Button>
          <Button manageClick={ addInput }>3</Button>
          <Button manageClick={ addInput }>+</Button>
        </div>
        <div className='line'>
          <Button manageClick={ addInput }>4</Button>
          <Button manageClick={ addInput }>5</Button>
          <Button manageClick={ addInput }>6</Button>
          <Button manageClick={ addInput }>-</Button>
        </div>
        <div className='line'>
          <Button manageClick={ addInput }>7</Button>
          <Button manageClick={ addInput }>8</Button>
          <Button manageClick={ addInput }>9</Button>
          <Button manageClick={ addInput }>*</Button>
        </div>
        <div className='line'>
          <Button manageClick={ calculate }>=</Button>
          <Button manageClick={ addInput }>0</Button>
          <Button manageClick={ addInput }>.</Button>
          <Button manageClick={ addInput }>/</Button>
        </div>
          
        <div className='fila'>
          <ClearButton manageClick={ () => setInput('') }>Clear</ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App;
