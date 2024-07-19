import { useState } from "react";

function MyComponent()
{
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    function nameChange(event)
    {
        setName(event.target.value);
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const changeEmployeeState = () => {
        setEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <input value={name} onChange={nameChange}/>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={changeEmployeeState}>Change Employee State</button>
    </div>);
}

export default MyComponent