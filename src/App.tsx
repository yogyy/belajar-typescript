import "./App.css";
import Loggedin from "./components/State/Loggedin";
import User from "./components/State/User";

function App() {
  return (
    <div className="app">
      <Loggedin />
      <User />
    </div>
  );
}

export default App;
