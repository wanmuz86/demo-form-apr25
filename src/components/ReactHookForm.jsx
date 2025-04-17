import React from 'react'
import {useForm} from 'react-hook-form'

const ReactHookForm = () => {
    // register: to register the input
    // handleSubmit: handleSubmission
    // errors: keep track of the errors
    
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = (data) => {
        console.log(data)

    }
  return (
    <div>
        <h2>React Hook Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" {...register("email")} />
            </div>
            <button type='submit'>Submit data</button>
           
        </form>
    </div>
  )
}

export default ReactHookForm