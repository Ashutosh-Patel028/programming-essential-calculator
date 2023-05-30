import React, { useState } from 'react';
import BinToDecConverter from './components/BinToDecConverter';
import BinaryOperations from './components/BinaryOperations';
import Factorial from './components/Factorial';
function App() {
 
  return (
    <div className='container'>
      <h1>Programming-Essential-Calculator</h1>
      <BinToDecConverter/>
      <BinaryOperations/>
      <Factorial/>
    </div>
  );
}

export default App;
