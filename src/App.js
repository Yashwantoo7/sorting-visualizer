import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import MergeSort from './components/MergeSort/MergeSort';
import './App.css';
import SortingContextProvider from './context/SortingContext';
import QuickSort from './components/QuickSort/QuickSort';
import InsertionSort from './components/InsertionSort/InsertionSort';
import BubbleSort from './components/BubbleSort/BubbleSort';

const App = () => {
  return (
    <SortingContextProvider>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/mergesort' component={MergeSort}/>  
        <Route exact path='/quicksort' component={QuickSort}/>
        <Route exact path='/insertionsort' component={InsertionSort}/>     
        <Route exact path='/bubblesort' component={BubbleSort}/>     
      </Switch>
    </SortingContextProvider>
  )
}

export default App
