import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 10rem;
    border-bottom: solid 1px;
    border-color: ${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
    grid-area: Header;
    display: flex;
    justify-content: space-evenly;
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

export const Search = styled.div`
        display: flex;
        align-items: center;
    > input {
        width: 30rem;
        height: 3.8rem;
        padding-left: 1rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 1rem;
        border-radius: 1rem;
        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 1rem;
        }
    }

`;