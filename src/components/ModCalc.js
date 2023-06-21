import React,{useState,useEffect} from "react";

const ModCalc = () =>{
    const [num1,setNum1]=useState(null);
    const [num2,setNum2]=useState(null);
    const [answer,setAnswer]=useState(null);

    const handleUpdateNum1 = (e)=>{
        setNum1(e.target.value);
    }

    const handleUpdateNum2 = (e)=>{
        setNum2(e.target.value);
        setAnswer(num1%num2);
    }
    
    useEffect(()=>{
        if(isNaN(num2)===false && num2!==null) setAnswer(num1%num2);
        console.log("called");
    },[num1,num2]);

    return (
        <div className="bg-slate-400  w-1/2 m-2 p-3 rounded-md text-center">
            <h2 className='font-serif font-bold p-1 text-lg'>Calculate MOD</h2>
            <input className="rounded-md m-2 p-1 focus:outline-purple-400" placeholder="enter first no." onChange={handleUpdateNum1}/>
            <label className="m-2 text-lg font-medium font-mono">mod(%)</label>
            <input className="rounded-md m-2 p-1 focus:outline-purple-400" placeholder="enter second no." onChange={handleUpdateNum2}/>
            <label className="m-2 text-lg font-mono font-medium">{isNaN(answer)===false ? answer:0}</label>
        </div>
    );
}

export default ModCalc;