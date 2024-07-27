import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea { 
        font-family: 'Roboto', serif;
    }

    a{
        text-decoration: none
    }

    &[data-mobile-only]{
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            display: none;
        }
    }

    &[data-desktop-only]{
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            display: none;
        }
    }
`;