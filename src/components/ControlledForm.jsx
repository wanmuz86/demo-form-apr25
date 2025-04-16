import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState("")

    const handleButton = () => {
        console.log(name)
    }
  return (
    <div>
        <h2>Controlled Form Example</h2>
        <div>
            <label htmlFor="name">Enter name</label>
            <input type="text" id="name" value={name} 
            onChange={(e)=>setName(e.target.value)}  />
        </div>

        <button onClick={handleButton}>Show value</button>
    </div>
  )
}

export default ControlledForm