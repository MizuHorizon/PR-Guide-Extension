import reactLogo from "./assets/react.svg";
import "./App.css";
import { run } from "../public/geminiIntegration";
import { useState } from "react";

function App() {
  const [ApiKey, setApiKey] = useState("");
  const handleClick = async () => {
    const yourResponse = await run(ApiKey);
    console.log("code in response ", yourResponse);
    return yourResponse;
  };
  const handleChange = (e) => {
    setApiKey(e.target.value);
  };
  return (
    <>
      <div>
        <a href="https://react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Your PR Guide</h1>
      <div className="input">
        <input
          type="text"
          placeholder={ApiKey}
          onChange={handleChange}
          className="inputs"
        />
      </div>
      <div className="card">
        <button onClick={handleClick}>Get PR Guide</button>
        <p>view your pull request more clearly</p>
      </div>
      <p className="read-the-docs">
        Paste your Gemini API key and you are all set
      </p>
    </>
  );
}

export default App;
