import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState("")

    const options = [{ name: "Male", value: "male" }, { name: "Female", value: "female" },
    { name: "nondisclose", value: "Prefer not to disclosed" }]

    const [gender,setGender] = useState("male")  // default
    const [genderOption, setGenderOption] = useState("male")


    const [colors,setColors] = useState([
        {"name":"Blue", "isChecked":false},
        {"name":"Red", "isChecked":false},
        {"name":"Yellow", "isChecked":false},
        {"name":"Green", "isChecked":false}
    ])

    const handleColorChange = (color) => {

        // Update the property isChecked
        color.isChecked = !color.isChecked
        // Update the colors with the updated value

        setColors([...colors])
    }
    const handleButton = () => {
        console.log(name)
        console.log(gender)
        console.log(genderOption)
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
            <div>
                <label htmlFor="colors">Select colors</label>
                <div>
                    {
                        colors.map(val=>
                            <p key={val.name}>
                                <input type="checkbox" name="colors"
                                checked={val.isChecked} 
                                onChange={()=>handleColorChange(val)}
                                />
                                <label>{val.name}</label>
                        </p>
                    )
                    }
                </div>
                
                <div>
                    Selected colors: 
                    <div>
                        {/* Retrive the checked color , show it in an li*/}
                    {colors.filter(val=> val.isChecked === true).map(
                        val => <p>{val.name}</p>   
                    )}
                    </div>
                </div>
                <div>
                    <p>Select a gender</p>
                    <div>
                        {
                            options.map(val=>
                                <div key={val.value}>
                                    <input type="radio"
                                    value={val.value} name="gender"
                                    onChange={(e)=> setGenderOption(e.target.value)} />
                                    {val.name}
                                </div>
                                )
                        }
                    </div>
                </div>
                
            </div>

            <button onClick={handleButton}>Show value</button>
        </div>
    )
}

export default ControlledForm