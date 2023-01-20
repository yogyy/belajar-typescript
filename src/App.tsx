import "./App.css";
import User from "./components/context/User";
import {UserContext, UserContextProvider} from "./components/context/UserContext";

function App() {
  return (
    <div className="app">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
