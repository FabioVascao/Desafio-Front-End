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
        width: 100%;
        padding: 0rem 6.4rem;
    }
    .Tags {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
        border-radius: 0.4rem;
        padding: 0.5rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 2rem;
    }
`;

export const Content = styled.div`
    padding: 0 1rem;
    overflow-y: auto;
    > h1 {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 500;
    }
    > a {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 1.2rem;
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
            font-size: 1.2rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`
export const New = styled.div`
    width: 100%;
    display: inline-flex;
    gap: 2rem;
    margin-top: 1rem;
`
export const Buttons = styled.div`
    width: 100%;
    display: inline-flex;
    gap: 2rem;
    margin-top: 1rem;
    > button {
        font-size: 1.4rem;
        display: flex;
        justify-content: center;
    }
    > button:nth-child(1){
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
        color: ${({theme}) => theme.COLORS.PINK};
    }
`