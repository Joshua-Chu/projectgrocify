import { useState } from "react";
import styled from "styled-components";
import { Size } from "../types";
import { useWindowSize } from "../hooks";

const MainContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(63px, 94px) 3fr;

    @media (min-width: 900px) {
        border: 2px solid red;

        grid-template-columns: minmax(63px, 94px) auto minmax(313px, 390px);
    }

    & > div {
        padding: 0 15px;
    }
`;

const MainDiv = styled.div({
    background: "pink",
});

const ShoppingDiv = styled.div({
    background: "red",
});

const NavDiv = styled.div({
    background: "yellow",
});

const HomePage = () => {
    const [toggleShop, setToggleShop] = useState<boolean>(false);
    const size: Size = useWindowSize();

    return (
        <MainContainer>
            {size.width && size.width < 900 ? (
                <NavDiv>
                    <button
                        type="button"
                        onClick={() => setToggleShop(!toggleShop)}
                    >
                        Open
                    </button>
                </NavDiv>
            ) : (
                <NavDiv>
                    <button type="button">I am here now</button>
                </NavDiv>
            )}

            {size.width && size.width < 900 ? (
                toggleShop ? (
                    <ShoppingDiv>
                        <h1>3</h1>
                    </ShoppingDiv>
                ) : (
                    <MainDiv>
                        <h1>2</h1>
                    </MainDiv>
                )
            ) : (
                <>
                    <MainDiv>
                        <h1>2</h1>
                    </MainDiv>
                    <ShoppingDiv>
                        <h1>3</h1>
                    </ShoppingDiv>
                </>
            )}
        </MainContainer>
    );
};

export default HomePage;
