import React from 'react';
import styled from 'styled-components';
import './App.css';

const MyButton = styled.button`
  border: 5px solid gold;
  background-color: goldenrod;
`;

const App = () => (
  <div className="App">
    <MyButton>Test styled component</MyButton>
    <p>Test paragraph</p>
  </div>
);

export default App;
