import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    max-width: 20rem;
    width: 100%;
    background-color: var(--dark-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20vh;

    img {
        border-radius: 50%;
        height: 6.25rem;
        width: 6.25rem;
        margin-bottom: 3rem;
    }

    ul {
        list-style: none;
        li {
            margin-bottom: 1.8rem;
            a {
                font-size: 1.1rem;
                color: var(--light-color);
                text-decoration: none;
                transition: 0.2s;

                svg {
                    margin-right: 1.2rem;
                }

                &:hover {
                    filter: brightness(0.5);
                }
            }
        }
    }

`;