import styled from 'styled-components';

export const Container = styled.div`
    height: 3.75rem;
    max-width: 32rem;
    min-width: 20rem;

    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;

    span {
        font-size: 1.2rem;
    }

    svg {
        transition: 0.2s;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
    
`;