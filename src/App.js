import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: #141414;
    color: white;
  };
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        Hello World
      </div>
    </>
  );
}

export default App;
