import React, { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                   <h2 className='text-center'>Employee Form</h2>
                   <div className='card-body'>
                     <form>
                        <div className='form-group mb-2'>
                        <label className='form-label'>First name:</label>
                        <input
                        type='text'
                        placeholder='Enter Employee first name'
                        name='firstName'
                        value={firstName}
                        className='form-control'
                        onChange={handlefirstName}
                        >
                        </input>
                        </div>
                     </form>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeComponent
