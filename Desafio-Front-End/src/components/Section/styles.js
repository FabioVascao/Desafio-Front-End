
import styled from "styled-components";

export const Container = styled.section`
    padding-top: 0.7rem;
    > h2 {
        padding-bottom: 0.6rem;
        margin-bottom: 0.3rem;
        color: ${({theme}) => theme.COLORS.GRAY_500};
        font-size: 1.6rem;
        font-weight: 400;
    }
`;