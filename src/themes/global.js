import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.textColor};   
        transition: all 0.30s linear;
    }
    
    .Footer {
        background: ${({theme}) => theme.footerColor};
        border-left: 2px solid ${({theme}) => theme.textColor};
        
        transition: all 0.30s linear;
    }
    
    .Footer .Social-Links a {
        color: ${({theme}) => theme.textColor};
        background: ${({theme}) => theme.bgColor};
    }
    
    .ThemeToggler .circle {
        left: ${({theme}) => theme.circlePos};
        transition: all 0.30s linear;   
    }

    @media screen and (orientation: portrait) {
        .Footer {
            border-left: none;
        }
    }
`