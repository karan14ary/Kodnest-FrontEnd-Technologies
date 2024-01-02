import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App(){
  return(
    <div>
      <h1>App component</h1>
      <Header/>
      <Content/>
      <Footer/>

    </div>
  );
}
function Header(){
  return(
    <div style={{backgroundColor:'yellow',color:'blue',fontFamily:'fantasy', textAlign:'center'}}>
<h1>Header component</h1>
</div>
  );
}
function Content(){
 function getresult(event){
  let ans1=event.target.q1.value;
  let ans2=event.target.q2.value;
  let ans3=event.target.q3.value;
  let ans4=event.target.q4.value;
  let ans5=event.target.q5.value;
  let ans6=event.target.q6.value;
  let ans7=event.target.q7.value;
  let ans8=event.target.q8.value;
  let ans9=event.target.q9.value;
  let ans10=event.target.q10.value;
  let ans11=event.target.q11.value;
  let listans=["A. OOPL","A. DBMS","A. HyperTextL","A. Framework",
  "A. Inheritance","C. Cascading style sheet","B. JRE-JVM,Javaclasslibraries"
,"A. Use the cpu efficiently","A. Framework","B. Java database connectivity",
"A. ORM tool"];
let listqes=[ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11];
let marks=0;
for(let i=0;i<=10;i++){
if(listqes[i]===listans[i]){
marks++;
}
}
  alert ("Your score is:"+marks);
 }
  return(
    <div style={{backgroundColor:'GrayText',padding:'5px' }}>
      <form onSubmit={getresult}>
<h1>Content component</h1>
<Quesation
ques="Q1. What is java?"
op1="A. OOPL"
op2="B. Functional"
op3="C. Scripting"
name="q1"
/>
<Quesation
ques="Q2. What is SQL?"
op1="A. DBMS"
op2="B. PL"
op3="C. Scripting"
name="q2"
/>
<Quesation
ques="Q3. What is HTML?"
op1="A. HyperTextL"
op2="B. Tags"
op3="C. Skeletal to webpage"
name="q3"
/>
<Quesation
ques="Q4. What is React?"
op1="A. Framework"
op2="B. Dom-web"
op3="C. Native-app"
name="q4"
/>
<Quesation
ques="Q5. What are pillar of OOPS?"
op1="A. Inheritance"
op2="B. Encapsulation"
op3="C. Polymorphism"
name="q5"

/>
<Quesation
ques="Q6. What is CSS?"
op1="A. Style"
op2="B. Design"
op3="C. Cascading style sheet"
name="q6"
/>
<Quesation
ques="Q7. What are elements in jdk?"
op1="A. JVM-bytecode loader,verifier"
op2="B. JRE-JVM,Javaclasslibraries"
op3="C. JVM execution engine-JIT compiler,JavaInterpreter"
name="q7"
/>
<Quesation
ques="Q8. What is Multithreading?"
op1="A. Use the cpu efficiently"
op2="B. Output is unpredictable"
op3="C. Threadschduler is brain in multithreading"
name="q8"
/>
<Quesation
ques="Q9. What is Collection?"
op1="A. Framework"
op2="B. overcome arrays disadvantage"
op3="C. readymade tool"
name="q9"
/>
<Quesation
ques="Q10. What is JDBC?"
op1="A. Tool to connect java with Database"
op2="B. Java database connectivity"
op3="C. developer write Sql query"
name="q10"
/>
<Quesation
ques="Q11. What is Hibernate?"
op1="A. ORM tool"
op2="B. Mapping tool to map class and data member to relational Db"
op3="C. no need to write Sql query"
name="q11"
/>
<input type="submit" value="Get Value"></input>
</form>
</div>
  );
}
function Footer(){
  return(
<footer style={{backgroundColor:'Highlight'}}> &#169;  	ABC Technologies Email:xyz@ABC.com.in       contact:+919876543210</footer>
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
