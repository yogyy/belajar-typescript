import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  return (
    <div className="app">
      <Private isLoggedIn={false} component={Profile} />
    </div>
  );
}

export default App;
