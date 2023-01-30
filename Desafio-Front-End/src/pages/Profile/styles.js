import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    > header {
        width: 100%;
        height: 8rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_MEDIUM};
        display: flex;
        align-items: center;
        padding: 0 12.4rem;
        svg {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 2.4rem;
        }
        a {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 400px;
    margin: 30px auto 0;
    > div:nth-child(4){
        margin-top: 30px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;
    width: 186px;
    height: 186px;
    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }
    > label {
        width: 48px;
        height: 48px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
        input {
            display: none;
        }
        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
        }
    }
`;