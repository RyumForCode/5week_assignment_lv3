import styled from 'styled-components';
import './App.css';
import ModalExtra from './components/ModalExtra';
import ModalNormal from './components/ModalNormal';

function App() {
  return (
    <div>
      <h1>Modal</h1>
      <StListItem>
        <ModalNormal/>
        <ModalExtra/>
      </StListItem>
      <h1>Button</h1>
      <h1>Input</h1>
      <h1>Select</h1>
    </div>
  );
}

export default App;

const StListItem = styled.div`
  display : flex;
  gap : 0.5rem;
`