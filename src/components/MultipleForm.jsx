import React,{useState} from 'react'

const MultipleForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (e) => {

    }
    const handleSubmit = () => {

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