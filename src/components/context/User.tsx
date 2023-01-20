import {useContext, useState} from "react";
import {UserContext} from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "yogi contantine ",
      email: "yogiyagami222@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      {userContext?.user ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <div className="">User name is {userContext.user?.name}</div>
      <div className="">User email is {userContext.user?.email}</div>
    </div>
  );
}
