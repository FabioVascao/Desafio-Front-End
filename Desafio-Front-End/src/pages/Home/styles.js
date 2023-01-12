import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    "Header"
    "Content";
    > main {
        grid-area: Content;
        overflow-y: auto;
        margin: 5rem 12rem;
        display: flex;
    }
    > h1 {
        font-size: 3.2rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 400;
        line-height: 4.2rem;
    }
`;

