import React, { useState } from 'react'

function Card({subject,hour,key}) {

       const[hourValue,sethourValue]=useState(hour)
   

  return (
    <>
         <div className="flex items-center justify-between gap-2 mt-5 bg-slate-400 w-[500px] h-auto px-4 py-4">
                <p key={key}>{subject} - {hourValue} hour</p>
                <div className="flex gap-2">
                <button 
                onClick={()=>{sethourValue(hourValue+1)}}
                className="bg-green-600 w-10 text-lg rounded-sm">+</button>
                <button 
                onClick={()=>{
                    if(hourValue>=1){
                        sethourValue(hourValue-1)
                    }
                    else{
                        alert("not valid number")
                    }
                    }}
                className="bg-red-500 w-10 text-lg rounded-sm">-</button>
                </div>
            </div>
    </>
  )
}

export default Card