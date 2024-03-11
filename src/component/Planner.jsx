import React, { useEffect, useState } from 'react'
import Card from './Card'


function Planner() {

    const[courseData, setcourseData]=useState([])
    const[subject, setsubject]=useState("")
    const[hour,sethour]=useState(0)
     

   
         
    

    const clickHandler = ()=>{
        const newCourseData ={
            subjectName:subject,
            totalHour:parseInt(hour)
        }

        const tempData =[...courseData,newCourseData]
        setcourseData(tempData)
    }

console.log(courseData);

  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <div className="mt-40">
                <h1 className="text-2xl">Geekster Education Planner</h1>
            </div>
            <div className="flex gap-3 mt-3">
                <input
                id='subject'
                type="text"
                placeholder="Subject"
                className="w-48 h-10 rounded-md py-2 pl-1 pr-3 border-2 border-gray-400"
                onChange={(e)=>{setsubject(e.target.value)}}
                >

                </input>
                 
                 <input
                 id='hour'
                 type="number"
                 placeholder="Hour"
                 className="w-20 h-10 rounded-md py-2 pl-1 pr-3 border-2 border-gray-400"
                 onChange={(e)=>{sethour(e.target.value)}}
                 >

                 </input>
                
                <button className="bg-green-600 w-20 h-10 rounded-lg text-white"
                 onClick={clickHandler}
                
                >Add</button>


            </div>
            {courseData.map((course, index)=>(
               <Card subject={course.subjectName} hour={course.totalHour} key={index}  />
            ))}
            
        </div>
        
    </>
  )
}

export default Planner