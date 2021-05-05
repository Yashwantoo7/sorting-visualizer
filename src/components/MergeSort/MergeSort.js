import React, { useContext, useEffect } from 'react'
import { SortingContext } from '../../context/SortingContext'

const MergeSort = () => {
    const {initialArr,setInitialArr}=useContext(SortingContext);
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
    return (
        <div className='array-container'>
            {initialArr.map((val,ind)=><div className='array-bar' style={{height:`${val}px`}} key={ind}></div>)};
        </div>
    )
}

export default MergeSort
