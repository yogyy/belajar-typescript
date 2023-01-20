import "./App.css";
import Box from "./components/context/Box";
import ThemeContextxProvider from "./components/context/ThemeContext";

function App() {
  return (
    <div className="app">
      <ThemeContextxProvider>
        <Box />
      </ThemeContextxProvider>
    </div>
  );
}

export default App;
