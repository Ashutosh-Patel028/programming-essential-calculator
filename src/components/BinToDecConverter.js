import React, { useState } from 'react';

function BinToDecConverter(){
    const [BinaryVal, setBinaryVal] = useState(0);
    let CalculateBinary = (e) => {
      let DecimalVal = e.target.value;
      let BinaryVal = parseInt(DecimalVal, 10).toString(2);
      setBinaryVal(BinaryVal);
    }
    return (
        <div>
            <br/>
            <br/>
            <h2>Decimal to Binary</h2>
            <input type="text" onChange={CalculateBinary} placeholder="Enter a Decimal Value" />
            <span>{BinaryVal}</span>
        </div>
    );
}

export default BinToDecConverter;