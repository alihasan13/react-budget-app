import React from 'react';
import "./App.css";
import Header from './Components/Header';
import Balance from './Components/Balance';
import Transaction from "./Components/Transaction"
import IncomeList from "./Components/IncomeList"
import ExpenseList from "./Components/ExpenseList"
import Counter from "./Components/Counter"

 const App = () => {
  return (
    
    <div class="container">
      <div class="app-wrapper">
      <Header/>
      <Balance/>
      <Transaction/>
      <IncomeList/>
      <ExpenseList/>
      <Counter/>
      </div>
      
    </div>
  )
}
export default App;