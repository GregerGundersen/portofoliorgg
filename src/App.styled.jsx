import styled, { createGlobalStyle } from "styled-components";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const colors = {
  dark900: "#0e4342",
  dark800: "#125453",
  dark700: "#156564",
  dark600: "#187775",
  dark500: "#1c8786",
  dark400: "#1f9896",
  dark300: "#23A9A7",
  dark200: "#26BAB8",
  dark100: "#2ACBC8",
  textColorLight: "white",
  textColorDark: "black",
};

export const fonts = {
  heading: "'Nixie One', 'cursive'",
  body: "'Encode Sans Condensed', 'sans-serif'",
};

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0 12px;
`;

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        h1, h2, h3, h4, h5{
          font-family: ${fonts.heading};
        }
        p, span, a{
          font-family: ${fonts.body}
        }

    }
`;

export const Wrapper = styled(Box)`
  /* display: flex;
  justify-content: space-between; */
  width: 100%;
`;
