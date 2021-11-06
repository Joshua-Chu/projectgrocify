import { useState } from "react";
import * as S from "./sampleStyles";

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
            <S.StyledHeaders color="yellow">
                Count: {count}
                <button onClick={incrementCountHandler} type="button">
                    Increment
                </button>
                <button onClick={decrementCountHandler} type="button">
                    Decrement
                </button>
            </S.StyledHeaders>
        </div>
    );
};

export default HomePage;
