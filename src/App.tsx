import "./App.css";
import {Text} from "./components/polymorphic/Text";

function App() {
  return (
    <div className="app">
      <Text as="h1" size="lg">
        Judul
      </Text>
      <Text as="p" size="md">
        Paragraf
      </Text>
      <Text as="label" htmlFor="ids" size="sm" color="primary">
        isi
      </Text>
    </div>
  );
}

export default App;
