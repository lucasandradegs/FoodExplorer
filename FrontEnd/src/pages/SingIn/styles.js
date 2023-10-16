import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15.8rem 6.5rem;

    .title {
        display: flex;
        align-items: center;
        
        
        gap: 1.1rem;
        margin-bottom: 4.1rem;

        h2 {
            font-size: 3.4rem;

            @media (max-width: 407px) {
                font-size: 2rem;
            }
        }

        img {
            width: 4.3rem;
            height: 4.3rem;
        }
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    input {
        width: 31.6rem;
    }

    P {
        margin-top: 3.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    button {
        margin-top: 3.2rem;
    }
`;