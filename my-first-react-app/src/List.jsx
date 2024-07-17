
function List()
{
    const fruits = [{id: 1, name: "apple", ccal: 95}, 
                    {id: 2, name: "orange", ccal: 45}, 
                    {id: 3, name: "banana", ccal: 204}, 
                    {id: 4, name: "coconut", ccal: 154}, 
                    {id: 5, name: "ananas", ccal: 37}];

    fruits.sort((a, b) => b.name.localeCompare(a.name));

    const lowCalFruits = fruits.filter(fruit => fruit.ccal < 100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp;
                                          {fruit.ccal} kcal
                                          </li>);

    const listLowCals = lowCalFruits.map(fruit => <li key={fruit.id}>
    {fruit.name}: &nbsp;
    {fruit.ccal} kcal
    </li>);

    return(<div>
        <ol>{listItems}</ol>
        <h2>Fruits with low amount of calories:</h2>
        <ul>{listLowCals}</ul>
        </div>);
}

export default List