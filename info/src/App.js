import React from 'react';
import './App.css';
import Routing from './Component/Routing';
import Form from './Component/Form';
import Form2 from './Component/Form2';
function App() {
  return (
    <React.Fragment>
      <Routing/>
      <h1>i'm the Boss...</h1>
      <Form />
      <Form2 />
    </React.Fragment>
  );
}

export default App;
