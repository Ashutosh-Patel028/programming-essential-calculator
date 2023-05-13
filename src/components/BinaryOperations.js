import React, { useState } from 'react';

function BinaryOperations(){
    const [firstNumber, setfirstNumber]=useState(0);
    const [secondNumber, setsecondNumber]=useState(0);
    const [operator, setoperator]=useState('OR');
    const [result, setresult]=useState(0);

    const handleFirstNumberChange=(event)=>{
        setfirstNumber(event.target.value);
    }

    const handleSecondNumberChange=(event)=>{
        setsecondNumber(event.target.value);
    }

    const handleOperatorChange=(event)=>{
        setoperator(event.target.value);
        calculateResult();
    }    

    const calculateResult=()=>{
        console.log('called me');
        if(operator==='OR'){
            console.log("result= "+ firstNumber|secondNumber);
            setresult(firstNumber|secondNumber);
        }
        else if(operator==='AND'){
            console.log("result= "+ firstNumber&secondNumber);
            setresult(firstNumber&secondNumber);
        }
        else if(operator==='NOT'){
            console.log("result= "+ ~firstNumber);
            setresult(~firstNumber);
        }
    }

    // console.log("first="+ firstNumber);
    // console.log("second="+ secondNumber);
    // console.log("operator="+ operator);
    return (
        <div>
            <h2>Binary Operator Operations</h2>
            <input placeholder='enter first number' onChange={ handleFirstNumberChange } ></input>
            <select id='Operator' onChange={handleOperatorChange}>
                <option id='OR'>OR(|)</option>
                <option id='AND'>AND(&)</option>
                <option id='NOT'>NOT(!)</option>
                <option id='XOR'>XOR(^)</option>
            </select>
            <input placeholder='enter second number' onChange={handleSecondNumberChange}></input>
            <label>{result}</label>
        </div>
    );
}

export default BinaryOperations;