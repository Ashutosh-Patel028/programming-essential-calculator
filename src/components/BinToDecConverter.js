import React, { useState } from 'react';

function BinToDecConverter(){
    const [BinaryVal, setBinaryVal] = useState(0);
    let CalculateBinary = (e) => {
      let DecimalVal = e.target.value;
      let BinaryVal = parseInt(DecimalVal, 10).toString(2);
      setBinaryVal(BinaryVal);
    }
    return (
        <div className='m-2 bg-slate-400 p-3 w-1/2 rounded-md text-center text-lg'>
            <h2 className='font-serif font-bold p-1'>Decimal to Binary</h2>
            <input className='rounded-md m-2 p-1 focus:outline-purple-400' type="text" onChange={CalculateBinary} placeholder="Enter a Decimal Value" />
            <span className='font-sans'>{BinaryVal}</span>
        </div>
    );
}

export default BinToDecConverter;