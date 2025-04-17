import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    // register: to register the input
    // handleSubmit: handleSubmission
    // watch : Observe the form, and do something when the data change
    // errors: keep track of the errors

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // Setup the watcher
    
    const watchName = watch("gender") // Watch for the value specify on gender
    const watchTitle = watch("title")

    useEffect(()=>{
        // Whenever there is a change in gender, and title,
        // this console will be executed and we can customize it
        console.log("Gender or title has been changed")
        console.log(watchTitle)
        console.log(watchName)

        
    },[watchTitle, watchName])



    const onSubmit = (data) => {
        console.log(data)

    }
    return (
        <div>
            <h2>React Hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <select {...register("title", { required: true })}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" {...register("name", { required: true })} />
                    {
                        errors.name && <p style={{ color: 'red' }}>Name is required</p>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" {...register("email",
                        { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                    {
                        errors.email && <p style={{ color: 'red' }}>Email is required and to be in correct format</p>
                    }
                </div>
                <div>
                    <input type="number" placeholder="Phone number" {...register("Phone number", { required: true })} />
                </div>
                <div>
                    <p>Gender</p>
                    <label htmlFor='Male'>
                        <input {...register("gender", { required: true })} type="radio" value="male" />Male</label>
                        <label htmlFor='Female'>
                    <input {...register("gender", { required: true })} type="radio" value="female" />
                    Female
                    </label>
                    <label htmlFor='Prefer not to state'>
                    <input {...register("gender", { required: true })} type="radio" value="prefernottostate" />
                    Prefer not to state
                    </label>
                </div>
                <div>
                    <p>Are you a developer?</p>
                    <label htmlFor='yes'>
                    <input {...register("developer", { required: true })} type="radio" value="yes" />
                    Yes
                    </label>
                    <label htmlFor='no'>
                    <input {...register("developer", { required: true })} type="radio" value="no" />
                    No
                    </label>
                </div>
                <button type='submit'>Submit data</button>

            </form>
        </div>
    )
}

export default ReactHookForm