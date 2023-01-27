import styled from 'styled-components';
import backgroundImg from '../../img/Background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
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
        margin-bottom: 4.8rem;
    }
    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.1rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 4.8rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;;
    background-size: cover;
`;