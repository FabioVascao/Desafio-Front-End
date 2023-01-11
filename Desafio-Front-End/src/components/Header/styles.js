import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 11.6rem;
    border-bottom: solid 1px;
    border-color: ${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
    grid-area: Header;
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;
`;

export const Title = styled.div`
   display: flex;
   align-items: center;
   h1 { 
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK};
   }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        line-height: 2.4rem;
        span {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            text-align: right;
        }
        strong {
            font-size: 1.4rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;

export const Input = styled.div`
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