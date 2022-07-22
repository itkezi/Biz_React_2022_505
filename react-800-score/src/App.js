import logo from "./logo.svg";
import "./App.css";
import "./w3css.css";
import ScoreMain from "./comps/ScoreMain";
import { ScoreContextProvider } from "./context/ScoreContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo4 App-logo" alt="logo" />
        <img src={logo} className="logo6 App-logo2" alt="logo" />
        <img src={logo} className="logo1 App-logo" alt="logo" />
        <img src={logo} className="logo3 App-logo2" alt="logo" />
        <img src={logo} className="logo4 App-logo" alt="logo" />
        <img src={logo} className="logo2 App-logo2" alt="logo" />
        <img src={logo} className="logo3 App-logo" alt="logo" />
        <img src={logo} className="logo1 App-logo2" alt="logo" />
        <img src={logo} className="logo5 App-logo" alt="logo" />
        <img src={logo} className="logo3 App-logo2" alt="logo" />
        <img src={logo} className="logo2 App-logo" alt="logo" />
        <img src={logo} className="logo4 App-logo2" alt="logo" />
      </header>
      <ScoreContextProvider>
        <ScoreMain />
      </ScoreContextProvider>
    </div>
  );
}

export default App;
