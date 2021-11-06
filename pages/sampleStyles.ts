import styled from "styled-components";

export const StyledHeaders = styled.h1(props => ({
    color: props.color,

    button: {
        background: "red",
        marginLeft: "20px",
    },
}));
