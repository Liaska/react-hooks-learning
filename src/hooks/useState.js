import React, { useState } from "react";

function calculatingCounter() {
    console.log("calc");
    return Math.trunc(Math.random() * 20);
}

function App() {
    //const [counter, setCounter] = useState(calculatingCounter());
    // Нельзя выводить калькуляцию в useState напрямую, чтобы не было повторных рендеров, нужен callback

    const [counter, setCounter] = useState(() => {
        return calculatingCounter();
    });

    const [state, setState] = useState({
        title: "Счетчик",
        date: Date.now(),
    });
    
    // Лучше делать объекты отдельными полями
    
    // Для увеличения Counter на 2 нельзя setCounter(counter + 1) + setCounter(counter + 1);
    // Необходимо выводить callback с предыдущим состоянием

    function decrement() {
        setCounter((prev) => prev - 1);
        // setCounter(prev => prev - 1);
    }

    function increment() {
        setCounter((prev) => prev + 1);
    }

    function updateTitle() {
      setState(prev => {
        return {
          ...prev,
          title: 'new'
        }
      })
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">
                Добавить
            </button>
            <button onClick={decrement} className="btn btn-danger">
                Убрать
            </button>

            {/* РАБОТАЕТ НЕ КАК В CLASS - при изменении объекта, он изменяется полностью, а не сливается 
            
              <button
                  onClick={() => setState({ title: "new" })}
                  className="btn btn-default"
              >Изменить заголовок</button>
            
            */}

            <button
                onClick={updateTitle}
                className="btn btn-default"
            >
                Изменить заголовок
            </button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
