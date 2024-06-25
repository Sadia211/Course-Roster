import React from "react";
import "./Cart.css"
 

const Cart=({selectedCourses,remaining,totalCredit})=>{
console.log(selectedCourses);
return(
    <div className="cart">
        <h5 className="blue">Number of Courses:{selectedCourses.length}</h5>
    <h5>Credit hour Remaining:{remaining}</h5>
    <h5>Total credits:{totalCredit}</h5>
   <div className="course"><h5>Selected Courses</h5></div> 
    {selectedCourses.map((course)=>(
<li key={course.name}>{course.name}</li>
    ))}
    
    
    </div>
);
};
export default Cart;