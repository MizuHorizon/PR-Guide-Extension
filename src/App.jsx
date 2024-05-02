import Logo from "./assets/illustrationPR.svg";
import "./App.css";
import { run } from "../public/geminiIntegration";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [ApiKey, setApiKey] = useState("Enter your API_KEY");
  const [loading, setLoading] = useState(false); // State to store loading status

  const handleClick = async () => {
    if (ApiKey === "Enter your API_KEY") {
      alert("Enter the api key");
    } else {
      setLoading(true);
      const response = await run(ApiKey);
      if (response === null) {
        alert(
          "you are not on files changed section of the pull request. Go to the files changed section to use this extension"
        );
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Merge Master</h1>
      {loading ? (
        <ClipLoader color={"#FFFFFF"} loading={loading} size={50} />
      ) : (
        <>
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
        </>
      )}
      <p className="read-the-docs">
        Paste your Gemini API key and you are all set
      </p>
    </>
  );
}

export default App;
