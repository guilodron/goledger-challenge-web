import styled from 'styled-components';

export const Container = styled.button`
    margin: 1rem 0;
    outline: none;
    border: none;
    background-color: var(--blue);
    padding: .5rem 1rem;
    color: white;
    font-size: 1rem;
    border-radius: 20px;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`;