import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Curency from './components/Curency';
import Hello from "./components/Clock"

   const Moneyy = (
       <>
       <Hello />
       <Curency />
       </>
   )
    ReactDOM.render(Moneyy, document.getElementById('Root'));

