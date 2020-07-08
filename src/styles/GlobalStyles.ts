import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: var(--text)
}

html, body, #root {
  max-height: 100vh;
  max-width: 100vw;

  width: 100%;
  height: 100%;
}

*, button, input {
  border: 0;
  background: none;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

html {
  background-color: var(--primary);
  -webkit-font-smoothing: antialiased !important;
}


:root {
  --primary: white;
  --secondary: #eee;
  --search: #f1f1f1;
  --text: #171717;
  --gray: #677786;
  --outline: #ddd;
  --retweet: #00C06B;
  --like: #E8265E;
  --twitter: #33A1F2;
  --twitter-dark-hover: #2C8ED611;
  --twitter-light-hover: #2C8ED6;
  --white: #fff;
  }

`;
