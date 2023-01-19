import "./App.css";
import Btn from "./components/Btn";
import Container from "./components/Container";
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
      <Container
        styles={{background: "transparent", border: " 1px solid yellow", padding: "1rem"}}
      />
    </div>
  );
}

export default App;
