import React,{useEffect} from "react";

import "./Home.css"
import Cart from "./Cart"
import { useState } from "react";

const Home =()=>{
    const[allcourses,setAllCourses]=useState([]);
    const[selectedCourses,setSelectedCourses]=useState([]);
    const [remaining,setRemaining]=useState(0);
    const[totalCredit,setTotalCredit]=useState(0);

    
    useEffect(()=>{
        fetch("./data.json")
        .then((res)=>res.json())
        .then((data)=>setAllCourses(data));
    },[]);

    const handleSelectCourses=(course)=>{
 const isExist=selectedCourses.find((item)=>item.name==course.name);
 let count=course.credit;
 if(isExist){
  return alert("course already taken");

 }else{
  selectedCourses.forEach((item)=>{
    count=count+item.credit;
  });
 }
 const totalRemaaining=20-count;
 if(count>20){return alert("Credit exceeded");}
 else{

 setTotalCredit(count);
 setRemaining(totalRemaaining);


      setSelectedCourses([...selectedCourses,course]); 
 }  
    };
return (<div>
  <h1 className="text-3xl py-5">Course Registration</h1>
      
    
     <div className='container '>
       
        <div className='home-container'>
         
     <div className='card-container  '>
       
     
     
     {allcourses.map((course)=>(
            <div key={course.name} className='card'>
               <img src={course.image}  />
               <h2>{course.name}</h2>
               <p><small>{course.description}</small></p>
               <div className="info">
                <div className="price">
                <small>Price : {course.price}$</small></div>
                <div className=  "credit">
                <small>Credit : {course.credit}</small></div>
                </div>
                <button onClick={()=>handleSelectCourses(course)}
                className='bg-blue text-white'>Select</button>
            </div>
            ))}     
      
      
      </div>
      <div className="text-lg">
        <Cart selectedCourses={selectedCourses} remaining={remaining} totalCredit={totalCredit}></Cart>
      </div>
      </div>
</div>
     </div>
    
  );
};
export default Home;

