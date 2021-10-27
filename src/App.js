import React,   { useState, useEffect }  from 'react';
import { Link,Route } from 'wouter';

import './App.css';
import ListofGifs from './Components/ListOfGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to ='/gift/peru'>gifs de Perú</Link>
        <Route
        component = {ListofGifs}
        path = "/gift/:Keyword"/>
      </section>
    </div>
  );
}

export default App;
