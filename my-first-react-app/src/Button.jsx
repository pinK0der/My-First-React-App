
function Button()
{
    let count = 0;

    const handleClick = (event, name) => {
        if(count > 3)
        {
            console.log(`${name}, u clicking me too much`);
        }
        else
        {
            count++;
            event.target.textContent = "oi";
        }
    };

    //const handleClick2 = (name) => console.log(`${name}, u clicking me too much`);

    return(
    <button onClick={(event) => handleClick(event, "Bro")}>Click me</button>
    );
}

export default Button