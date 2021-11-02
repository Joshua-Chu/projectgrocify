import { useState } from "react";

const HomePage = () => {
    const [count, setCount] = useState<number>(0);

    const incrementCountHandler = () => {
        console.log("Incrementing");
        setCount(count + 1);
    };

    const decrementCountHandler = () => {
        console.log("Decrementing");
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>

            <div>
                <button onClick={incrementCountHandler} type="button">
                    Increment
                </button>
                <button onClick={decrementCountHandler} type="button">
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default HomePage;
