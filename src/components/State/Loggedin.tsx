import {useState} from "react";

export default function Loggedin() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  };
  const handleLogout = () => {
    setIsLoggedin(false);
  };

  return (
    <div>
      {isLoggedin ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Login </button>
      )}
      <div>
        <h1>
          user is{" "}
          {isLoggedin ? (
            <span className="textinfo">logged in</span>
          ) : (
            <span className="textinfo">logged out</span>
          )}
        </h1>
      </div>
    </div>
  );
}
