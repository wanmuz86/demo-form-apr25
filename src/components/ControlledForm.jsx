import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState("")

    const options = [{ name: "Male", value: "male" }, { name: "Female", value: "female" },
    { name: "nondisclose", value: "Prefer not to disclosed" }]

    const [gender,setGender] = useState("male")  // default

    const handleButton = () => {
        console.log(name)
        console.log(gender)
    }
    return (
        <div>
            <h2>Controlled Form Example</h2>
            <div>
                <label htmlFor="name">Enter name</label>
                <input type="text" id="name" value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="gender">Select Gender</label>
                <select name="gender" id="gender" value={gender} 
                onChange={(e)=> setGender(e.target.value)}>
                    {
                        options.map(val=><option key={val.value}
                        value={val.value}>{val.name}</option>)
                    }
                </select>
            </div>

            <button onClick={handleButton}>Show value</button>
        </div>
    )
}

export default ControlledForm