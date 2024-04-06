/* eslint-disable no-unused-vars */

import { useState } from 'react'
export function X(){
    return(
        <>
          
      <span className="w-fit h-fit text-[50px] font-bold m-auto selection:bg-transparent text-blue-900  ">X</span>
       
        </>
    )
}

export function O(){
    return(
        <>
        
      <span className=" text-[50px] font-bold m-auto selection:bg-transparent text-red-900 ">O</span>
       
        </>
    )
}
export function Board(){
    const [square,setSquare] =  useState(null)
    const [number,setNumber] =useState(0)
    console.log()
    const numberHandle = (event) => {
        setNumber(prevNumber => {
            console.log(event.target.getAttribute('value'))
            const newNumber = prevNumber + 1;
            if (newNumber % 2 !== 0) {
                setSquare(<X/>)}
            else{
                setSquare(<O/>)
            }
            return newNumber;
        });
    }
    
    return <>
    <div className=" w-fit h-fit m-auto">
    <div className=" grid grid-cols-3 gap-0 hover:cursor-pointer w-[210px]">
        {/* {angkas.map((angka) => <div className=" w-[70px] h-[70px] border text-white m-0 selection:bg-transparent" onClick={console.log(1)} key ={angka}></div>)} */}
        <div className=" border w-[70px] h-[70px] " id="1" value="1" onClick={numberHandle}>{square}</div>
        <div className=" border w-[70px] h-[70px]" value="2"onClick={numberHandle} >{square}</div>
        <div className=" border w-[70px] h-[70px]" value="3" onClick={numberHandle}></div>
        <div className=" border w-[70px] h-[70px]" value="4" onClick={numberHandle}></div>
        <div className=" border w-[70px] h-[70px]" value="5"onClick={numberHandle} ></div>
        <div className=" border w-[70px] h-[70px]" value="6"onClick={numberHandle} ></div>
        <div className=" border w-[70px] h-[70px]" value="7"onClick={numberHandle} ></div>
        <div className=" border w-[70px] h-[70px]" value="8"onClick={numberHandle} ></div>
        <div className=" border w-[70px] h-[70px]" value="9" onClick={numberHandle}></div>
        
      </div>
      <h1>{number}</h1>
    </div>
     
    </>
}
