import Logo from "./assets/illustrationPR.svg";
import "./App.css";
import { run } from "../public/geminiIntegration";
import { useState } from "react";

function App() {
  const [ApiKey, setApiKey] = useState("Enter your API_KEY"); // State to store response
  
  const handleClick = async () => {
    const response = await run(ApiKey);
  };
  
  const handleChange = (e) => {
    setApiKey(e.target.value);
  };
  return (
    <>
      <div>
          <img src={Logo} className="logo react" alt="React logo" />
      </div>
      <h1>Merge Master</h1>
      <div className="input">
        <input
          type="password"
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
