import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Acme', sans-serif;
  };

  body {
    background-color: #000;
    background-image: ${props => props.speaking ? "url(/waves.gif)" : "#000"};
    color: #fefefe;
    font-size: 1.15rem;
    background-repeat: repeat-x;
    background-size: cover;
    background-position: 0 47vh;
  };
`;

const Form = styled.div`
  width: 600px;
  margin: 50px auto;
  padding: 50px;
  background: transparent;
  height: 475px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input[type=range] {
    height: 24px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
  }

  input[type=range]:focus {
    outline: none;
  }
  
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #FFFFFF;
    background: #FFFFFF;
    border-radius: 0px;
    border: 0px solid #FFFFFF;
  }
  
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #FFFFFF;
    border: 0px solid #FFFFFF;
    height: 18px;
    width: 28px;
    border-radius: 10px;
    background: #FFFFFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #FFFFFF;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #FFFFFF;
    background: #FFFFFF;
    border-radius: 0px;
    border: 0px solid #FFFFFF;
  }

  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #FFFFFF;
    border: 0px solid #FFFFFF;
    height: 18px;
    width: 28px;
    border-radius: 10px;
    background: #FFFFFF;
    cursor: pointer;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background: #FFFFFF;
    border: 0px solid #FFFFFF;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #FFFFFF;
  }

  input[type=range]::-ms-fill-upper {
    background: #FFFFFF;
    border: 0px solid #FFFFFF;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #FFFFFF;
  }

  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #FFFFFF;
    border: 0px solid #FFFFFF;
    height: 18px;
    width: 28px;
    border-radius: 10px;
    background: #FFFFFF;
    cursor: pointer;
  }

  input[type=range]:focus::-ms-fill-lower {
    background: #FFFFFF;
  }

  input[type=range]:focus::-ms-fill-upper {
    background: #FFFFFF;
  }

  .img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
    height: 245px;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    margin: 0 auto;
    margin-top: 55px;
    width: 175px;
    font-size: 1.3rem;
    cursor: pointer;
    outline: none;
    background: #d7d7d7;
  }

  .badge {
    float: right;
    background-color: white;
    padding: 0 8px;
    border-radius: 8px;
    color: #141414;
    font-size: 1rem;
  }
`;

export {
    GlobalStyles,
    Form
}