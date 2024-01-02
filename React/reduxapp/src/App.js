import './App.css';
import { increase,decrease,redBg,yellowBg,greenBg } from './actions';
import { useSelector,useDispatch } from 'react-redux' 
function App() {
  const val=useSelector((state)=>state.updateValue)
 const color=useSelector((state)=>state.updateColor)
  const dispatch=useDispatch()
  return (
    <div className={color} >
   <h1>Redux Counter</h1>
 
   <button onClick={()=>dispatch(decrease())}> - </button>
   <input type="text" value={val}readOnly/>
     <button onClick={()=>dispatch(increase())}> + </button>
    <br/>
    <br/>
   
    <h2>Background Color</h2>

    <button onClick={()=>dispatch(redBg())}> RED </button>
    <button onClick={()=>dispatch(yellowBg())}> YELLOW </button>
    <button onClick={()=>dispatch(greenBg())}> GREEN</button>

    </div>
     
  );
}

export default App;
