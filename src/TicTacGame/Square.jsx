import React from 'react'

const Square = (props)=> {
  return (
     

    <div onClick={props.onClick} className='flex    justify-center items-center w-[100px]  h-[100px] border-solid border-[3px]'>

   
        <h5 className='text-white text-5xl'>{props.value}</h5>
        </div>
    
  )
} 

export default Square