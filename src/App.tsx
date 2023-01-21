import "./App.css";
import List from "./components/generic/List";

function App() {
  return (
    <div className="app">
      {/* <List items={[1, 2, 3]} onClick={(items) => console.log(items)} /> */}
      <List
        items={[
          {id: 1, first: "Lex", last: "Luthor"},
          {id: 2, first: "The", last: "Joker"},
          {id: 3, first: "Reverse", last: "Flash"},
        ]}
        onClick={(items) => console.log(items)}
      />
    </div>
  );
}

export default App;
