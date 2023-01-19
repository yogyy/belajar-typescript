import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <div className="app">
      <Status status="loading" />
      <Heading children="dimas anjay mabar" />
      <div className="logo">
        <Oscar>
          <Heading children="knp tuh kira kira😂" />
        </Oscar>
      </div>
      <Greet name="yogy" lagiLogin={false} />
    </div>
  );
}

export default App;
