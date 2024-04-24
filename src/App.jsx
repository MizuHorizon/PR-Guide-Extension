import reactLogo from "./assets/react.svg";
import "./App.css";
import { run } from "../public/geminiIntegration";

function App() {
  const handleClick = async () => {
        const yourResponse = await run();
        console.log("code in response ",yourResponse)
        return yourResponse
      }
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Your PR Guide</h1>
      <div className="card">
        <button onClick={handleClick}>Get PR Guide</button>
        <p>view your pull request more clearly</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
