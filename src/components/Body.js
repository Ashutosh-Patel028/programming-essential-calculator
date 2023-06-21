import React from "react";
import BinaryOperations from "./BinaryOperations";
import BinToDecConverter from "./BinToDecConverter";
import ModCalc from "./ModCalc";
const Body = () => {
    return (
        <div className="">
           <BinToDecConverter/>
           <BinaryOperations/>
           <ModCalc/>
        </div>
    );
};

export default Body;