import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0);

    function increment(){
        if(count>=10) return;
        setCount(count + 1);
    }
    function decrement(){
        if(count==0) return;
        setCount(count - 1);
    }
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;