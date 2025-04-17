import React, { useState } from 'react'

const MultipleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Update form data
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    
        // Validate on change
        // Spread operator on an object (errors)
        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
    
            if (name === "name") {
                // If less than 5, the errors for name will be set..
                updatedErrors.name = value.length < 5 ? "Name cannot be less than 5 characters" : null;
            }
    
            if (name === "email") {
                 // If does not follows the format5, the errors for email will be set..
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                updatedErrors.email = !emailRegex.test(value) ? "Email needs to be in the correct format" : null;
            }
    
              // If is less than 5, the errors for message will be set..
            if (name === "message") {
                updatedErrors.message = value.length < 10 ? "Message needs to be at least 10 characters" : null;
            }
    
            return updatedErrors;
        });
    };

    // const handleChange = (e) => {
    //     // Object destructuring..
    //     // e.target refers to the form/input
    //     // name = e.target.name [the attribute name from the form] 
    //     // value = e.target.value [the attribute value from the form]


    //     const { name, value } = e.target;

    //     // spred operator on an object
    //     // update the previous value of the object with the new key, pair , eg : name:"Muzaffar", email:"aa@bb.com"
    //     // [name] = name, email or message
    //     // value = aa@gmail.com, wan muz

    //     // This for format, will always take prevFormData as the old value of the form
    //     // way 1: setFormData({name:'Muza', email:'aa@aa.com',message:'sss'})

    //     // way 2: prevFormData refer to the previous value of formData
    //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))

    // }
    const handleSubmit = () => {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const formError = { name: null, email: null, message: null }

        let hasError = false

        if (!formData.name || formData.name.length < 5) {
            formError.name = 'Name cannot be less than 5 characters'
            hasError = true
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            formError.email = "Email needs to be in the correct format"
            hasError = true
        }

        if (!formData.message || formData.message.length < 10) {
            formError.message = "Message needs to be at least 10 characters"
            hasError = true
        }

        setErrors(formError)
        if (!hasError) {
            console.log(`name: ${formData.name}, email: ${formData.email},
        message: ${formData.message}`)
        }
    }
    return (
        <div>
            <h2>Multiple Component Form</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name="name" value={formData.name} onChange={handleChange} />
                {
                    errors.name && <p style={{ color: 'red' }}>{errors.name}</p>
                }
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                {
                    errors.email && <p style={{ color: 'red' }}>{errors.email}</p>
                }
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange}>

                </textarea>
                {
                    errors.message && <p style={{ color: 'red' }}>{errors.message}</p>
                }
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default MultipleForm