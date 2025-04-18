import React, {use, useEffect, useState} from 'react'
import { listEmployee } from '../Services/EmployeeServices'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
   
    useEffect (() => {        
        listEmployee().then((response) => {
            setEmployees(response.data);
        }).catch(error  =>{
            console.error(error);
        })

    }, [])

    return (
        <div className='containers'>

            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>)  
                    }
                </tbody >
            </table>
        </div>
    )
}

export default ListEmployeeComponent
