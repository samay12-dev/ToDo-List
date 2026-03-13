import React, { useState } from 'react'
import "./Styles/Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { list } from 'postcss'
const Main = ({ listInfo }) => {
 const [element,setElement]=useState(listInfo)  
function handleClick(dataItem){
  setElement((prev) => prev.filter((item, index) => index !== dataItem));
}
 
function handleClick2(){
  setValue((value)=>r2.current.value)
}

  let r1=useRef();
let r2= useRef();
let r3=useRef();
const [value,setValue]=useState([])

function handleClick3(){
{r3.style.display="none"}
}
 const [item23,setItem]=useState([]);

 function handleClick4() {
  setItem((prev) => [...prev, r2.current.value]);
}
function handleClick5(index1){
// setMyValue((prev)=>(prev.filter(item,index) =>index!==index1));
 setItem((prev) => prev.filter((_, index) => index !== index1))

}


  return (
    <>
    <main className='bg-gray-200  '>
<div id='container' className='flex justify-center items-center'>
  <ul >
    <li>
      <ul className='lg: flex items-center '><li className='ml-3' >  <input type="text" placeholder='add a task' className='lg: w-96 p-4  pr-32 mr-2 rounded' id='input1'  ref={r2} /></li>
      <li className= 'lg:p-4 [perspective:1000]' id='listItem'><FontAwesomeIcon icon={faPlus} size="2x"  className='border-4 rounded-xl hover: shadow-md bg-lime-800 ' id='icon2'  onClick={handleClick4}  /></li></ul>
    
    </li>
    <li>
      <ul className='mt-20' id='list1' ref={r1}>

      {
        item23.map((data,index)=>(
          <li className='font-bold font-sans bg-white border-b-2 p-5 pr-2 rounded-sm flex justify-between  text-xl mb-4 shadow-md rounded-lg'>{data}   <button id='btn1' aria-label='remove' className='border-2' onClick={()=>{
handleClick5(index)
                }}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                </li>
          
          
        ))
      }
    
        {
        
            element.map((item, index) => (
              <li key={index} className='font-bold font-sans bg-white border-b-2 p-5 pr-2 rounded-sm flex justify-between text-xl mb-4 shadow-md rounded-lg' id='childList ' onClick={handleClick3} >
                {item.info} 
                <button id='btn1' aria-label='remove' className='border-2' onClick={()=>{
handleClick(index)
                }}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))
         
        }
      </ul>
    </li>
  </ul>
</div>
    </main>
    </>
  )
}

export default Main
