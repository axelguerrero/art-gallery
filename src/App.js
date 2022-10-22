import React from "react";
import { useState, useEffect} from "react"
import './App.css';

function App() {
  useEffect(() => {
   document.title = "Welcome to The Gallery" 
  })
  return (
    <div className="App">
     Hello
    </div>
  );
}

export default App;
