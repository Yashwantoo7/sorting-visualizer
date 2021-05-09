import React, { useContext, useEffect } from 'react'
import { SortingContext } from '../../context/SortingContext'
import { bubbleSort } from './BubbleAlgo';

const BubbleSort = () => {
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
        const animations=bubbleSort(initialArr);
        const arrayBars = document.getElementsByClassName('array-bar');
        const length=animations.length;
        for (let i = 0; i < length; i++) {
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = 'red';
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i*1);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.backgroundColor='blue';
                if(i===length-1){
                    arrayBars[arrayBars.length-1].style.backgroundColor='blue';
                }
                barOneStyle.height = `${newHeight}px`
              }, i*1);
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

export default BubbleSort
