import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App(){
  const [subject, setsubject] = useState(null);
  function renderPage(){
    switch(subject){
      case'JAVA':
        return <Java/>;
      case 'SQL':
        return <Sql/>
      case 'COMMUNICATION':
        return <Communication/>
      default:
        return <h1>----</h1>
    }
  }
  return(
    <div className="page">
    <div className= "btn">
      <h1>Click on any buttion</h1>
      <button onClick={()=>setsubject('JAVA')}>JAVA</button>
      <button onClick={()=>setsubject('SQL')}>SQL</button>
      <button onClick={()=>setsubject('COMMUNICATION')}>COMMUNICATION</button>
    {renderPage()}
    </div>
    </div>

  );
}
function Java(){
return(
  <div className='ques'>
    <form>
    <h1>Java Component</h1>
    <Quesation
ques="Q1. What is java?"
op1="A. OOPL"
op2="B. Functional"
op3="C. Scripting"
name="q1"
/>
<input type ="submit" value="next"></input>
</form>
</div>
);
}
function Sql(){
  return(
    <div className='ques'>
      <form>
<h1>SQL Component</h1>
<Quesation
ques="Q2. What is SQL?"
op1="A. DBMS"
op2="B. PL"
op3="C. Scripting"
name="q2"
/>
<input type ="submit" value="next"></input>
</form>
</div>
  );
}
function Communication(){
  function getResult(event){
    let ans1=event.target.q1.value;
    let ans2=event.target.q2.value;
    let ans3=event.target.q3.value;
let marks=0;
if (ans1==="A. OOPL"){
  marks++;
}
  if (ans2==="A. DBMS"){
    marks++;
  }
  if(ans3==="B. JRE-JVM,Javaclasslibraries"){
  marks++;
}
alert("marks obtained"+marks);
  }   
return(
  <div className='ques'>
    <form onSubmit={getResult}>
    <h1>Communication Component</h1>
    <Quesation
ques="Q3. What are elements in jdk?"
op1="A. JVM-bytecode loader,verifier"
op2="B. JRE-JVM,Javaclasslibraries"
op3="C. JVM execution engine-JIT compiler,JavaInterpreter"
name="q3"
/>
<input type="Submit" value="Submit"></input>
</form>
</div>
);
}

function Quesation(props){
  return(
    <div style={{backgroundColor:'salmon',padding:'5px'}}className='quesation'>
<h2>{props.ques}</h2>
<input type='radio'name={props.name} value={props.op1}></input><label>{props.op1}</label><br></br>
<input type='radio'name={props.name} value={props.op2}></input><label>{props.op2}</label><br></br>
<input type='radio'name={props.name} value={props.op3}></input><label>{props.op3}</label><br></br>

  </div>);
}


