import logo from "./logo.svg";
import "./App.css";
import PaulAAlba from "./components/PaulAAlba";

function App() {
  return (
    <div className="App">
      <h1>Alba Gold System</h1>

      {/* Existing PaulAAlba Component */}
      <PaulAAlba />

      {/* Add Running Bear Container */}
      <div className="running-bear-container">
        <div className="running-bear"></div>
      </div>
    </div>
  );
}

export default App;
