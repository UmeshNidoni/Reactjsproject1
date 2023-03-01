import {React} from "react";
import axios from "axios";
import { useState } from "react";
function App() {
  const [NAME,setNAME]=useState("");
  console.log(NAME);

  const METHOD=()=>{
    axios.post(`http://localhost:8282/api/apicall?NAME=${NAME}`)
  }
  return <>
 <input type="text" onChange={(e)=>setNAME(e.target.value)}/><br/>
 <input type="text" onChange={(e)=>setNAME(e.target.value)} placeholder="PASSWORD"/><br/>
 <button type="submit" onClick={METHOD}>BUTTON</button>
  </>
}

export default App;
