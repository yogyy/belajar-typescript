import "./App.css";
import Btn from "./components/Btn";
import Input from "./components/Input";

function App() {
  return (
    <div className="app">
      <Btn
        handleClick={(event, id) => {
          console.log("...", event, id);
        }}
      />
      <Input value="" handleChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
