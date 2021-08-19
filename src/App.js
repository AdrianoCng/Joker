import { useEffect, useRef, useState } from "react";
import axios from "axios";

import * as Styles from "./styles";

import robot from "../src/img/eye.png";

const App = () => {
  // Ref to the Web Speech API
  const Synth = useRef(window.speechSynthesis);
  const utterance = useRef(new SpeechSynthesisUtterance());

  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voicesList, setVoiceslist] = useState([]);
  const [voiceSelected, setVoiceSelected] = useState();
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Utterance settings
  utterance.current.onstart = () => setIsSpeaking(true);
  utterance.current.onend = () => {
    setIsSpeaking(false);
  }
  utterance.current.pitch = pitch;
  utterance.current.rate = rate;
  utterance.current.voice = voiceSelected;

  const tellJoke = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous?type=single")

      setText(data.joke);
      utterance.current.text = data.joke;

    } catch (error) {
      utterance.current.text = "Sorry, I am not in the mood today. Try again later";
    } finally {
      Synth.current.speak(utterance.current);
    }
  }

  const stopTalking = event => {
    event.preventDefault();
    Synth.current.cancel();
  }

  const handleOnSubmit = event => {
    if (isSpeaking) return;

    event.preventDefault()

    utterance.current.text = text;

    Synth.current.speak(utterance.current);
  }

  const handleVoiceChange = event => {
    const voiceName = event.target.value;

    const voice = voicesList.find(voice => voice.name === voiceName)

    setVoiceSelected(voice);
  }

  // Populate List of voices available when first render
  useEffect(() => {
    const getVoices = () => {
      const voices = Synth.current.getVoices();

      setVoiceslist(voices);
    }

    // Firefox doesn't support SpeechSynthesis.onVoiceChanged and will just return a list of voices, so we can just call the function here
    getVoices();
    // For Chrome we need to wait for the onVoiceChanged event to fire before we can populate the list, so we set an event listener on the SpeechSynthesis.onvoiceschanged property
    if (Synth.current.onvoiceschanged !== undefined) {
      Synth.current.onvoiceschanged = getVoices
    }
  }, [])

  return (
    <>
      <Styles.GlobalStyles speaking={isSpeaking} />
      <Styles.Form onSubmit={handleOnSubmit}>
        <div className="img-container">
          <img src={robot} width="450px" alt="eye" />
        </div>

        {/* Textbox */}
        <div>
          <Styles.Textarea placeholder="Type anything..." onChange={(event) => setText(event.target.value)} value={text} />
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

        {/* Select input */}
        <Styles.Select>
          <select onChange={handleVoiceChange}>
            {voicesList.map(voice => <option key={voice.name}>{voice.name}</option>)}
          </select>
        </Styles.Select>

        <div className="buttons-container">
          <button disabled={isSpeaking}>Speak</button>
          <button disabled={!isSpeaking} onClick={stopTalking}>Stop</button>
          <button disabled={isSpeaking} onClick={tellJoke}>Tell me a joke</button>
        </div>
      </Styles.Form>
    </>
  );
}

export default App;