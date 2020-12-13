import React, { useCallback, useState } from "react";
import ItemList from "./hooks/itemList";
function App() {
    const [count, setCount] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? "darkred" : "black",
    };

    const generater = useCallback((indexNumber) => {
      return new Array(count).fill('').map((_,i)=>`Элемент ${i + indexNumber}`)
    },[count])

    return (
        <>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button
                className="btn btn-success"
                onClick={() => setCount((prev) => prev + 1)}
            >
                Добавить
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setColored((prev) => !prev)}
            >
                Изменить
            </button>

            <ItemList getItems={generater}/>
        </>
    );
}

export default App;
