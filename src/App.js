import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import MergeSort from './components/MergeSort/MergeSort';
import './App.css';
import SortingContextProvider from './context/SortingContext';

const App = () => {
  return (
    <SortingContextProvider>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/mergesort' component={MergeSort}/>        
      </Switch>
    </SortingContextProvider>
  )
}

export default App
