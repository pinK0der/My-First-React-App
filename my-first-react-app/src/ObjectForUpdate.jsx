import { useState} from "react";

function ObjectForUpdate()
{
    const [car, setCar] = useState({year: 2020,
                                    make: "Porsche",
                                    model: "718"});

    function handleYearChange(event)
    {
        setCar({...car, year: event.target.value});
    }
    function handleMakeChange(event)
    {
        setCar({...car, make: event.target.value});
    }
    function handleModelChange(event)
    {
        setCar({...car, model: event.target.value});
    }

    return(<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
    
        <input type="number" value={car.year} onChange={handleYearChange}></input>
        <br/>
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <br/>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
        <br/>
    </div>);
}

export default ObjectForUpdate