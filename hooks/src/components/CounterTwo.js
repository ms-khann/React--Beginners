import React, { useState } from "react";

function CounterTwo() {
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }]);
    }
    return (
        <>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map( item=> <li key={item.id}>{item.id}</li>)}
            </ul>

        </>
        );
}

export default CounterTwo;