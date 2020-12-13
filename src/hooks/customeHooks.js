import React, { useState, useEffect } from "react";

function useLogger(value) {
    useEffect(() => {
        console.log(value);
    }, [value]);
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const clear = () => setValue("");

    return {
        bind: {
            value,
            onChange,
        },
        value,
        clear,
    };
}

function App() {
    const nameInput = useInput("");
    const lastNameInput = useInput("");
    useLogger(nameInput.value);

    return (
        <div className={"container pt-3"}>
            <input type="text" {...nameInput.bind} />
            <button className="btn btn-warning" onClick={() => nameInput.clear()}>Очистить</button>

            <input type="text" {...lastNameInput.bind} />
            <button className="btn btn-warning" onClick={() => lastNameInput.clear()}>Очистить</button>

            <h1>{nameInput.value}</h1>
            <h1>{lastNameInput.value}</h1>

        </div>
    );
}

export default App;
