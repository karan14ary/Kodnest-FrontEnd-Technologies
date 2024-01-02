import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

function App(){
  const msg=["message one","message two","message three"];
 const [pg, setpg] = useState(1);
  function handlePrevious(){
    setpg(pg-1);
  }
  function handleNext(){
    setpg(pg+1);
  }
  return(
<div className="body">
    <div className="page">
    <div className="number">
    <div id="p" className={pg===1?"active":""}>1</div>
    <div id="p" className={pg===2?"active":""}>2</div>
    <div id="p" className={pg===3?"active":""}>3</div>
    </div>
    <div className="message">
      {msg[pg-1]}
      <br></br>
    </div>
    <div className="btn">
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>
    </div>
    </div>
    </div>
  );
}