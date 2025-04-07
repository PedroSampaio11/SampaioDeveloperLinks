import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    background-color: ${(props) => props.theme.colors.offBlack};
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 0.5rem;
        background-color: ${({ theme }) => theme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.purple500};
    }

    ::-moz-selection {
        background: ${({ theme }) => theme.colors.purple500};
        color: #fff;
        text-shadow: none;
    }
    &::selection {
        background: ${({ theme }) => theme.colors.gray500};
        color: #fff;
        text-shadow: none;
    }
}
`;
