import React, { useState } from 'react';
import BinToDecConverter from './components/BinToDecConverter';
import BinaryOperations from './components/BinaryOperations';

function App() {
 
  return (
    <div>
      <h1>Programming-Essential-Calculator</h1>
      <BinToDecConverter/>
      <BinaryOperations/>
    </div>
  );
}

export default App;
