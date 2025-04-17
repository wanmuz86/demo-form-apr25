import React, { useRef } from 'react'

const UncontrolledForm = () => {

    const selectRef = useRef(null) // Reference to the select
    const inputRef = useRef(null) // Reference to name
    const emailRef = useRef(null) // Reference to name
    const checkboxRef = useRef(null) // Reference to checkbox

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Input value ", inputRef.current.value) // document.getElement -> Getting the value from the DOM right away
        console.log("Select value", selectRef.current.value)
        console.log("Checkbox value ", checkboxRef.current.value)
    }
  return (
    <div>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" ref={inputRef}  required/>
            </div>
            <div>
            <label htmlFor="name">Email:</label>
            <input type="email" ref={emailRef}  required/>
            </div>
            <div>
                <label htmlFor="select">Favourite Color</label>
                <select ref={selectRef}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
            <div>
                <label htmlFor="react">
                    Do you like react?
                    <input type="checkbox" ref={checkboxRef} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm