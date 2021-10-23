import { createGlobalStyle } from 'styled-components';
import BackgroundImage from 'assets/Backgroun-image.svg';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,300;1,500&display=swap');
 
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }
  html {
      font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    background-image: url('${BackgroundImage}');
    background-size: contain;
    background-repeat: no-repeat;
   
  }
`;

export default GlobalStyle;
