import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { base_Url , Api_Key } from "./components/webUrl"
import POTD from "./components/POTD";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${base_Url}?api_key=${Api_Key}`)
    .then(({data}) => setData(data))
    .catch(err => console.log(`Error getting picture Data` , err))
  }, [])
  return (
    <div className="App">
      <POTD data={data}/>
    </div>
  );
}

export default App;
