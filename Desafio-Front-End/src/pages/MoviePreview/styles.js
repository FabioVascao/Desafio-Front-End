import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "Header"
    "Content";
    > main {
        width: 100%;
        padding: 2rem 6.4rem;
        grid-area: Content;
        overflow-y: auto;
        > h1 {
            font-size: 3.6rem;
            font-weight: 500;
            line-height: 4.7rem;
            margin: 0.5rem 0;
            display: flex;
            gap: 1rem;
        }
        > span {
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.8rem;
            padding-right: 1rem;
            display: flex-inline;
            align-items: center;
            justify-content: center;
            > img {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                margin-right: 0.5rem;
            }
            > svg {
                margin-right: 0.5rem;
                color: ${({theme}) => theme.COLORS.PINK};
            }
        }
    }
`;

export const Back = styled.div`
    width: 100%;
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    justify-items: center;
    > svg {
        padding-right: 0.5rem;
    }
`;

export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 2rem;
    margin: 2rem 0rem;
`;

export const Section = styled.div`
    width: 100%;
    margin-top: 2rem;
    align-items: justify;
    justify-items: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    text-indent: 2rem;
    text-align: justify;
`;