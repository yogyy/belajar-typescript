import "./App.css";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "John",
    last: "Constantine",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Barry",
      last: "Allen",
    },
  ];
  return (
    <div className="app">
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
