import React, { useState, useEffect } from "react";

export default function ItemList({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("kek");
        const newItems = getItems(42);
        setItems(newItems);
    }, [getItems]);

    return (
        <ul>
            {items.map((i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
    );
}
