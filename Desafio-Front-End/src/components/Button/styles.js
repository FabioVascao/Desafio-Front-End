import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
    height: 56px;
    border: 0;
    border-radius: 1rem;
    padding: 0 1.6rem;
    margin-top: 2.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-align: center;
    &:disabled {
        opacity: 0.5;
    }
    > svg {
        margin-right: 1.6rem;
    }
`;