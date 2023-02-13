import { useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ModalExtra from './components/ModalExtra';
import ModalNormal from './components/ModalNormal';
import SelectComp from './components/SelectComp';

function App() {

  const [clickDetect, setClickDetect] = useState(0);

  return (
    <div onClick = {() => {setClickDetect(clickDetect + 1)}}>
      <h1>Modal</h1>
      <StListItem>
        <ModalNormal/>
        <ModalExtra/>
      </StListItem>
      <h1>Button</h1>
      <StListItem>
        <Button/>
      </StListItem>
      <h1>Input</h1>
      <StListItem>
        <Input />
      </StListItem>
      <h1>Select</h1>
      <StListItem>
        <SelectComp />
      </StListItem>
    </div>
  );
}

export default App;

const StListItem = styled.div`
  display : flex;
  gap : 0.5rem;
`