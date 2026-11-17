import React from "react";
import { useState, useEffect } from "react";

function Employee(){
    const[employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7150/api/Employee")
        .then(res => res.json())
        .then(
            (result) => {
                setEmployees(result);
            }
        );
    });
    
    return(
        <div>
            <h2>Employees Data...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.location}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee