import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --dark-blue: #34495E;
        --light-color: #ECF0F1;
        --blue: #4267B2;
    }   

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: var(--light-color);
        div {
        overflow-x: hidden;
        }
        font-family: 'Roboto', sans-serif;
    }

    hr {
        border-width: 1px;
        border-color: black;
    }
`;