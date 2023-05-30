import { useState } from "react";


const Factorial = ()=>{
    const [number, setNumber] = useState(0);
    const calculateFactorial = (e)=>{
        let num = e.target.value;
        let fact = 1;
        for(let i=1; i<=num; i++){
            fact = fact*i;
        }
        setNumber(fact);
    }
    return (
        <div>
            <h2>Factorial :</h2>
            <input type="text" placeholder='enter number' onChange={calculateFactorial}/>
            <span>{number}</span>
        </div>
    )
}

export default Factorial;