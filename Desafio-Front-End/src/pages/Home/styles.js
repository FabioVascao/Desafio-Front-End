import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 8rem auto;
    grid-template-areas: 
    "Header"
    "Content";
    > main {
        grid-area: Content;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 2rem 6.4rem;
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
