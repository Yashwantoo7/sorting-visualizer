import React,{useState,createContext} from 'react'
export const SortingContext=createContext();

const SortingContextProvider = (props) => {
    const [initialArr,setInitialArr]=useState([]);
    const generateArray=(I,F,S)=>{
        var arr=[];
        for(let i=0;i<S;i++){
            arr.push(Math.floor(Math.random()*(F+1))+I)
        }
        return arr;
    }
    return (
        <SortingContext.Provider
            value={{initialArr,setInitialArr,generateArray}}
            >{props.children}
        </SortingContext.Provider>
    )
}

export default SortingContextProvider
