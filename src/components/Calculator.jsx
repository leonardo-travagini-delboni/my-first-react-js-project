import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';        // https://mui.com/components/container/
import Box from '@mui/material/Box';                    // https://mui.com/components/box/

// Calculator component
export default function Calculator() {

    // State to store the numbers
    const [num, setNum] = React.useState(0);
    const [oldNum, setOldNum] = React.useState(0);
    const [operator, setOperator] = React.useState();

    // Function to input numbers
    function inputNum(e) {
        var value = e.target.value;
        if (num === 0) {
            setNum(value);
        } else {
            setNum(num + value);
        }
    }

    // Function to clear the screen
    function clear() {
        setNum(0);
    }

    // Function to shut down the calculator
    function shutDown() {
        setNum('');
    }

    // Function to change the sign of the number
    function changeSign() {
        setNum(num * -1);
    }

    // Percentage function
    function percentage() {
        setNum(num / 100);
    }

    // Function to store the operator
    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    // Function to calculate the result
    function calculate() {
        if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num));
        } else if (operator === '-') {
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === 'X') {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === '/') {
            setNum(parseFloat(oldNum) / parseFloat(num));
        }
    }

    // Render the calculator
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs"> 
                <div className="wrapper">
                    <Box m={12}/>
                    <h1 className='resultado'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className='orange' onClick={operatorHandler} value="/">/</button>
                    <button className='gray' onClick={inputNum} value="7">7</button>
                    <button className='gray'onClick={inputNum} value="8">8</button>
                    <button className='gray'onClick={inputNum} value="9">9</button>
                    <button className='orange'onClick={operatorHandler} value="X">X</button>
                    <button className='gray'onClick={inputNum} value="4">4</button>
                    <button className='gray'onClick={inputNum} value="5">5</button>
                    <button className='gray'onClick={inputNum} value="6">6</button>
                    <button className='orange'onClick={operatorHandler} value="">-</button>
                    <button className='gray'onClick={inputNum} value="1">1</button>
                    <button className='gray'onClick={inputNum} value="2">2</button>
                    <button className='gray'onClick={inputNum} value="3">3</button>
                    <button className='orange'onClick={operatorHandler} value="+">+</button>
                    <button className='red' onClick={shutDown} value="">OFF</button>
                    <button className='gray'onClick={inputNum} value="0">0</button>
                    <button className='gray'onClick={inputNum} value={"."}>.</button>
                    <button className='orange' onClick={calculate} value="=">=</button>
                </div>
            </Container>
        </div>
    );
}