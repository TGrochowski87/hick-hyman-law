import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Neucha&family=Roboto+Condensed:wght@300;400;700&display=swap");


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: "Lato", sans-serif;
  font-weight: 400;
}

html{
  --theme-purple: #8124a7;
}

body{
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  transition: all 0.1s ease;
}

#root {
  height: 100vh;
}

.app {
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyles;
