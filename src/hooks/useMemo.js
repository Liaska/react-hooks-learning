import React, { useEffect, useState, useMemo } from "react";

function complexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
}

function App() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? "darkred" : "black",
    };
    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button
                className="btn btn-success"
                onClick={() => setNumber((prev) => prev + 1)}
            >
                Плюс
            </button>
            <button
                className="btn btn-danger"
                onClick={() => setNumber((prev) => prev - 1)}
            >
                Минус
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setColored((prev) => !prev)}
            >
                Изменить
            </button>
        </>
    );
}

export default App;
