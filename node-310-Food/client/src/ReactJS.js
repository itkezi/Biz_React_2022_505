import logo from "./logo22.png";
import logo2 from "./logo23.png";
import logo3 from "./logo24.png";
import "./ReactJS.css";
import DietMain from "./comps/DietMain";

function ReactJS() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo3} className="App-logo l3" alt="logo" />
        <img src={logo2} className="App-logo l2" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo l2" alt="logo" />
        <img src={logo3} className="App-logo l3" alt="logo" />
      </header>
      <DietMain />
    </div>
  );
}

export default ReactJS;
