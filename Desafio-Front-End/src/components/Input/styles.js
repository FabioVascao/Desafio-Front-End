import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 1rem;
    border-radius: 1rem;
    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        background: transparent;
        border: 0;
        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`;