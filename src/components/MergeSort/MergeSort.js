import React, { useContext, useEffect } from 'react'
import { SortingContext } from '../../context/SortingContext'
import {getMergeSortAnimatoins} from './MergeAlgo';


const MergeSort = () => {
    const {initialArr,setInitialArr,generateArray}=useContext(SortingContext);
    var size=200,I=5,F=400;

    useEffect(()=>{
        const generateArray=(I,F,S)=>{
            var arr=[];
            for(let i=0;i<S;i++){
                arr.push(Math.floor(Math.random()*(F+1))+I)
            }
            return arr;
        }
        setInitialArr(generateArray(I,F,size));
    },[setInitialArr,size,I,F])

    const sortArr=()=>{
        const animations=getMergeSortAnimatoins(initialArr);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {            
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? 'red' : 'blue';
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i*10);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i*10);
            }
        }        
    }
    return (
            <div className='array-container'>
                {initialArr.map((val,ind)=><div className='array-bar' style={{height:`${val}px`}}  key={ind}></div>)};
                <button onClick={()=>setInitialArr(generateArray(I,F,size))}>Generate Array</button>
                <button onClick={()=>sortArr()}>sort</button>
            </div>           
    )
}

export default MergeSort
