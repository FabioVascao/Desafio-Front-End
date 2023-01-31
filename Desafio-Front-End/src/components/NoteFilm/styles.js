import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
    border: none;
    border-radius: 1rem;
    padding: 2.2rem;
    margin-bottom: 1.6rem;
    > h1 {
        flex: 1;
        text-align: left;
        font-weight: bold;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    > p {
        font-size: 1.2rem;
        margin-top: 1rem;
        text-align: justify;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    > div {
        display: flex;
        text-align: left;
        margin-top: 1rem;
        > img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 0.5rem;      
    }
    }
    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
        gap: 0.5rem;
    }
`;