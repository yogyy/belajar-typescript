import "./App.css";
import CustomButton from "./components/html/Button";
import Input from "./components/html/Input";

function App() {
  return (
    <div className="app">
      <CustomButton variant="primary" onClick={() => console.log("clicked primary button")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
