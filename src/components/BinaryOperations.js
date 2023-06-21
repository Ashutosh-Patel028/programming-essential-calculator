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
        <div className='m-2 bg-slate-400 p-3 w-1/2 rounded-md text-center text-lg'>
            <h2 className='font-serif font-bold p-1'>Binary Operator Operations</h2>
            <input className='rounded-md m-2 p-1 focus:outline-purple-400' placeholder='enter first number' onChange={ handleFirstNumberChange } ></input>
            <select className='rounded-md p-1 m-1 focus:outline-lime-400 font-mono' id='Operator' onChange={handleOperatorChange}>
                <option id='OR'>OR(|)</option>
                <option id='AND'>AND(&)</option>
                <option id='NOT'>NOT(!)</option>
                <option id='XOR'>XOR(^)</option>
            </select>
            <input className='rounded-md m-2 p-1 focus:outline-purple-400' placeholder='enter second number' onChange={handleSecondNumberChange}></input>
            <label className='font-mono'>{result}</label>
        </div>
    );
}

export default BinaryOperations;