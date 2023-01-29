import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
--cream: #FCF4F5;
--dark-choc: #454240;
--fresh: #80C2BC;
--gum: #FFC4CC;
--butter: #FCF4CA;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}`;

export default GlobalStyle;
