 import React from "react";
 import { useState, useEffect } from "react";
 
 function Department(){
     const[departments, setDepartments] = useState([]);
 
     useEffect(() => {
         fetch("https://localhost:7150/api/Dept")
         .then(res => res.json())
         .then(
             (result) => {
                 setDepartments(result); 
             }
         );
     });
     
     return(
         <div>
             <h2>Departments Data...</h2>
             <table>
                 <thead>
                     <tr>
                         <th>Id</th>
                         <th>Name</th>
                     </tr>
                 </thead>
                 <tbody>
                     {departments.map(d => (
                         <tr key={d.id}>
                             <td>{d.id}</td>
                             <td>{d.name}</td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
     );
 }
 
 export default Department