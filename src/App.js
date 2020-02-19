import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = "5bc34c63";
  const APP_KEY = "62c931b989b3e81b6c36c72bf1ece52f"
  const API_PATH = "https://api.edamam.com/search"; 
  const SEARCH_PATH = "${API_PATH}?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";

  const [counter, setCounter] = useState(0);

  useEffect(() => {
      console.log("This has been run");
  });

  return (
    <div className="App">
      <form className="search-form">
      <input className="search-bar" type="text" />
      <button className="search-button" type="submit" />
      <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1>
      </form>
    </div>
  );
}

export default App;
