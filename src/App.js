import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useState} from 'react';
function App() {
  const [name, setName]= useState(" ");
  const [tnc, setTnc] = useState(false);
  const [interest , setInterest] = useState(" ")
  function getFormData (e){
    console.log(name,tnc,interest)
    e.preventDefault ()
  }
  return (
 
    <div className="App">
      <h1>Handle From in React</h1>
      <form onSubmit={getFormData} >
        <input type="text" placeholder="enter your name " onChange={(e)=> setName (e.target.value)} /><br /> <br />
        <select onChange={(e)=>setInterest(e.target.value) }>
          <option >select option </option>
          <option >BBA </option>
          <option >CSE </option>
          <option >Eng </option>
        </select> <br /> <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept terms and condition </span> <br /> <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
