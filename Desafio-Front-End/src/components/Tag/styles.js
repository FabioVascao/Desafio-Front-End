import styled from "styled-components";

export const Container = styled.span`
    width: max-content;
    height: 2.4rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    padding: 0.5rem 1.6rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
    color: ${({theme}) => theme.COLORS.WHITE};
    display: flex;
    text-align: center;
    align-items: center;
`;