import React, { useContext, useEffect } from 'react'
import { SortingContext } from '../../context/SortingContext'
import { quickSortAlgo } from './QuickAlgo';

const QuickSort = () => {
    const {initialArr,setInitialArr,generateArray}=useContext(SortingContext);
    var size=200,I=5,F=400;

    useEffect(()=>{
        const generateArray=(I,F,S)=>{
            var arr=[];
            for(let i=0;i<S;i++){
                arr.push(Math.floor(Math.random()*(F+1))+I);
            }
            return arr;
        }
        setInitialArr(generateArray(I,F,size));
    },[setInitialArr,size,I,F]);

    const sortArr=()=>{
        const animations=quickSortAlgo(initialArr);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 4 !== 2 && i%4!==3;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color1 = i % 4 === 0 ? 'red' : 'blue';
              const color2 = i % 4 === 1 ? 'green': 'blue';
              setTimeout(() => {
                barOneStyle.backgroundColor = color1;
                barTwoStyle.backgroundColor = color2;
              }, i*10);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                barOneStyle.backgroundColor = 'blue';
              }, i*10);
            }
        }        
    }
    return (
        <div className='array-container'>
            {
                initialArr.map((val,ind)=><div className='array-bar' style={{height:`${val}px`}} key={ind}></div>)
            }
            <button onClick={()=>setInitialArr(generateArray(I,F,size))}>generate arr</button>
            <button onClick={()=>sortArr()}>sort</button>
        </div>
    )
}

export default QuickSort
