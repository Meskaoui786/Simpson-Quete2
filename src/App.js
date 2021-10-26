import axios from "axios";
import './App.css';
import React, { useState } from "react";
import ListSimpsons from "./components/ListSimpsons";

const simpsonsQuotes = 
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }



function App() {
  const [quotes, setQuotes] = useState(simpsonsQuotes);

 
const getQuotes = () => {
  axios
  .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
  .then((res) => res.data)
  .then((data) => {
    setQuotes(data[0])
  })

  };


  return (
<div className="App">
  <header className="header">
    <h1> The Simpsons Génerator</h1>
    <button onClick={getQuotes}>Click Here Again</button>
 </header> 
 
 <body>
      <ListSimpsons quotes={quotes}/>
 </body>
</div>
    
  );
}

export default App;
