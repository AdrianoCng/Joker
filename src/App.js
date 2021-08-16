import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import robot from "../src/img/eye.png";

const App = () => {
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleRateChange = event => {
    setRate(event.target.value);
  };

  const handlePitchChange = event => {
    setPitch(event.target.value);
  }

  return (
    <>
      <GlobalStyles speaking={isSpeaking} />
      <Form>
        <div className="img-container">
          <img src={robot} width="450px" alt="eye" />
        </div>
        {/* Rate input */}
        <div>
          <label htmlFor="rate">Rate</label>
          <div className="badge">{rate}</div>
          <input id="rate" type="range" min="0.1" max="2" step="0.1" value={rate} onChange={handleRateChange} />
        </div>

        {/* Pitch input */}
        <div>
          <label htmlFor="pitch">Pitch</label>
          <div className="badge">{pitch}</div>
          <input id="pitch" type="range" min="0.1" max="2" value={pitch} onChange={handlePitchChange} step="0.1" />
        </div>
        <button>Tell me a joke</button>
      </Form>
    </>
  );
}

export default App;