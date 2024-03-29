import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`

body {
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
 
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
p,
input,
button {
  margin: 0;
  padding: 0;
}

address {
  font-style: normal;
}



ul {
  list-style: none;
}

a {
  font-style: normal;
  text-decoration: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  user-select: none;
  border: none;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;
