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
        padding: 0rem 6.4rem;
    }
`;

export const Content = styled.div`
    overflow-y: auto;
    padding: 0 6.4rem;
    > h1 {
        font-size: 3.6rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 500;
    }
    > a {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 1.6rem;
            font-weight: 400;
    }
    > textarea {
        height: 10rem;
        width: 100%;
        padding: 1.2rem;
        border-radius: 1rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
        border: 0;
        margin-top: 1rem;
        &:placeholder {
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`

export const New = styled.div`
    display: inline-flex;
    gap: 2rem;
    margin-top: 1rem;
`
