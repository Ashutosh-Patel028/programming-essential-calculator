import React from "react";
import BinaryOperations from "./BinaryOperations";
import BinToDecConverter from "./BinToDecConverter";

const Body = () => {
    return (
        <div className="">
           <BinToDecConverter/>
           <BinaryOperations/>
        </div>
    );
};

export default Body;