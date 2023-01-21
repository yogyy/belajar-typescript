import "./App.css";
import RandomNumber from "./components/restriciton/RandomNumber";

function App() {
  return (
    <div className="app">
      <RandomNumber value={1999} isPositive={true} />
    </div>
  );
}

export default App;
