import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialised;
    }
    a {
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter 0.1s;
    }
    button:hover, a:hover {
        filter: brightness(0.85);
    }
`;