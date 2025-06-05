import viteLogo from "/vite.svg";
import "./App.css";
import {} from "@repo/ui/button";

function App() {
  webflow.notify({ type: "Info", message: "Great work!" }); // General notification
  webflow.notify({
    type: "Error",
    message: "Something went wrong, try again!",
  }); // Error notification
  webflow.notify({ type: "Success", message: "Successfully did something!" }); // Success notification

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn moredfsddfsgdds gfghdgfh s
      </p>
    </>
  );
}

export default App;
