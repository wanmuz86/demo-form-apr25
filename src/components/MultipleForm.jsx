import React,{useState} from 'react'

const MultipleForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (e) => {
        // Object destructuring..
        // e.target refers to the form/input
        // name = e.target.name [the attribute name from the form] 
        // value = e.target.value [the attribute value from the form]

        const {name, value} = e.target;

        // spred operator on an object
        // update the previous value of the object with the new key, pair , eg : name:"Muzaffar", email:"aa@bb.com"
        // [name] = name, email or message
        // value = aa@gmail.com, wan muz
        
        setFormData((prevFormData) => ({...prevFormData, [name]:value}))

    }
    const handleSubmit = () => {
        console.log(`name: ${formData.name}, email: ${formData.email},
        message: ${formData.message}`)

    }
  return (
    <div>
        <h2>Multiple Component Form</h2>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange}>

            </textarea>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default MultipleForm