import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 1rem;
    border-radius: 1rem;
    > input {
        height: 3rem;
        width: 100%;
        padding: 1.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        background: transparent;
        border: 0;
        border-radius: 1rem;
        &:placeholder {
            font-size: 1.2rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
    > svg {
        margin-left: 1.6rem;
    }
`;