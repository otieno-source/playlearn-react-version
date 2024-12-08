import { useState } from "react"

function Form(){
    const[formData, setFormData] = useState({
        name: '',
        age: ""
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('submitting formdata')
    }

    return(
        <form>
            <label htmlFor="name">Name</label>
            <input type = 'text' id="name" name="name" value= {formData.name} onChange={handleChange}/>
        </form>
    )
}