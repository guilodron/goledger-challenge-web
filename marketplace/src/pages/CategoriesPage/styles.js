import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
    padding: 8rem 2rem;

    strong {
        font-size: 1.5rem;
    }

    .category-display {
        display: flex;
        justify-content: flex-start;

        img {
           margin-right: auto;
           align-self: flex-start;
        }

        .list {
            display: flex;
            flex-direction: column;
            width: 50%;
        }
    }
`;