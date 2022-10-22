import React from "react";
import { useState, useEffect} from "react"
import Gallery from "./Gallery";
import ButtonBar from "./ButtonBar";
import './App.css';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  useEffect(() => {
    document.title="Welcome to the Gallery"
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId])
  return (
    <div className="App">
     Hello
    <Gallery/>
    <ButtonBar/>
    </div>
  );
}

export default App;
