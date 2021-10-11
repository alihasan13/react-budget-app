import React from 'react';
import "./App.css";
import Header from './Components/Header';
import Balance from './Components/Balance';

 const App = () => {
  return (
    
    <div class="container">
      <div class="app-wrapper">
      <Header/>
      <Balance/>
      </div>
      
    </div>
  )
}
export default App;