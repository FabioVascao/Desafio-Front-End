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
        margin: 2rem 12rem;
        display: flex;
        justify-content: space-between;
        > button {
        width: 20rem;
        height: 3.5rem;
        margin: 0;
    }
    }
    > h1 {
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 400;
    }
    
`;

export const Content = styled.div`
    overflow-y: auto;
    padding: 0 6.4rem;
`
