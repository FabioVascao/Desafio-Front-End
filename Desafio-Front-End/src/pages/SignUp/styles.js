import styled from 'styled-components';
import backgroundImg from '../../img/Background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    width: 45%;
    padding: 2rem 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    > h1 {
        width: 34rem;
        text-align: left;
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 6.3rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    > span {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 2.8rem;
    }
    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.1rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 2.8rem;
    }
    > a {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.1rem;
        margin-top: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    > button {
        justify-content: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;;
    background-size: cover;
`;