import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
    @media(max-width: 1260px){
        padding: 1rem 1rem;
    }
    strong {
        font-size: 1.5rem;
    }
    hr {
        margin-bottom: 1.5rem;
    }
    padding: 8rem 2rem;
    .boxes {
        width: 100%;
        padding: 0rem 3.1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem;

        @media(max-width: 1260px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        img {
            max-width: 24rem;
        }
    
        .Box {
            span {
                font-weight: bold;
                color: var(--dark-blue);
            }
            a {
                text-decoration: none;
                color: var(--blue);
                font-weight: bold;
                transition: .2s;
                &:hover {
                    filter: brightness(0.7);
                }
            }
        }

    }

`;