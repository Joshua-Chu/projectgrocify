import { useState } from "react";
import styled from "styled-components";

const StyledHeaders = styled.h1({
    color: "green",
});

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
            <StyledHeaders>Count: {count}</StyledHeaders>

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
