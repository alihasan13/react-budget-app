 import React, {createContext, useReducer} from 'react'

 const initialState ={
     incomeTransaction:[
         {id:1, incomeText: "Salary", incomeAmount: "500"},
         {id:2, incomeText: "Savings", incomeAmount: "5000"},
         {id:3, incomeText: "Profit", incomeAmount: "50000"},
     ],
     expenseTransaction:[
         {id:1, expenseText: "Bazar", expenseAmount: "500"},
         {id:2, expenseText: "rent", expenseAmount: "5000"},
         {id:3, expenseText: "Daily Cost", expenseAmount: "50000"},
     ]

 };
 export const GlobaContext = createContext(initialState);
