import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from '../Button/Button';


function App() {
  // function showAlert() : void {
  //   alert("hello world")
  // }

  return (
    <div className='calculator'>
      <div>

      </div>
      <div>
        <Button number='AC' color='lightGrey' position='top-right' />
        <Button number='+/-' color='lightGrey' position='top-right' />
        <Button number='%' color='lightGrey' position='top-right' />
        <Button number='&#247;' color='yellow' position='top-right' />
      </div>
      <div>
        <Button number='7' color='darkGrey' position='top-right' />
        <Button number='8' color='darkGrey' position='top-right' />
        <Button number='9' color='darkGrey' position='top-right' />
        <Button number='x' color='yellow' position='top-right' />
      </div>
      <div>
        <Button number='4' color='darkGrey' position='top-right' />
        <Button number='5' color='darkGrey' position='top-right' />
        <Button number='6' color='darkGrey' position='top-right' />
        <Button number='-' color='yellow' position='top-right' />
      </div>
      <div>
        <Button number='1' color='darkGrey' position='top-right' />
        <Button number='2' color='darkGrey' position='top-right' />
        <Button number='3' color='darkGrey' position='top-right' />
        <Button number='+' color='yellow' position='top-right' />
      </div>
      <div>
        <Button number='0' color='darkGrey zero' position='top-right' />
        <Button number='.' color='darkGrey' position='top-right' />
        <Button number='=' color='yellow' position='top-right' />
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
