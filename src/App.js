import { useRef, useState } from "react";
import axios from "axios";

import * as Styles from "./styles";

import robot from "../src/img/eye.png";

const App = () => {
  // Ref to the Web Speech API
  const Synth = useRef(window.speechSynthesis);

  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const tellJoke = async () => {
    const utterance = new SpeechSynthesisUtterance();

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    try {
      const { data } = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single")

      utterance.text = data.joke;
      utterance.pitch = pitch;
      utterance.rate = rate;
    } catch (error) {
      utterance.text = "Sorry, I am not in the mood today. Try again later";
    } finally {
      Synth.current.speak(utterance);
    }
  }

  return (
    <>
      <Styles.GlobalStyles speaking={isSpeaking} />
      <Styles.Form>
        <div className="img-container">
          <img src={robot} width="450px" alt="eye" />
        </div>

        {/* Rate input */}
        <div>
          <label htmlFor="rate">Rate</label>
          <div className="badge">{rate}</div>
          <input id="rate" type="range" min="0.1" max="2" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
        </div>

        {/* Pitch input */}
        <div>
          <label htmlFor="pitch">Pitch</label>
          <div className="badge">{pitch}</div>
          <input id="pitch" type="range" min="0" max="2" value={pitch} onChange={e => setPitch(e.target.value)} step="0.1" />
        </div>

        <div className="buttons-container">
          <button disabled={isSpeaking} onClick={tellJoke}>Tell me a joke</button>
          <button disabled={!isSpeaking} onClick={() => Synth.current.cancel()}>Stop</button>
        </div>
      </Styles.Form>
    </>
  );
}

export default App;