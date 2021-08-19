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

const Form = styled.form`
  width: 600px;
  margin: 6px auto;
  padding: 50px;
  background: transparent;
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
    gap: 24px;
  }

  button {
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    margin: 0 auto;
    margin-top: 30px;
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

  span {
    margin-top: 26px;
    padding: 0 15px;
    font-size: 0.85rem;
    color: grey;
  }
`;

const Select = styled.div`
  select {
    height: 42px;
    border-radius: 8px;
    width: 100%;
    margin-top: 18px;
    font-size: 1.08rem;
    padding: 0 12px;
  }
`;

const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  height: 150px;
  margin-bottom: 25px;
  border-radius: 8px;
  padding: 15px;
  font-size: 1.1rem;
  background: transparent;
  color: white;
  border: 1px inset white;
  bow-shadow: 1px 1px 3px inset white;

  &:focus {
    outline: none;
  }
`;

export {
  GlobalStyles,
  Form,
  Select,
  Textarea
}