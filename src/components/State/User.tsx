import {useState} from "react";

type AuthUser = {
  name: string;
  email: string;
};
export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "yogi",
      email: "yogiyagami222@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Log out</button>
      )}
      <div className="">User name is {user?.name}</div>
      <div className="">User email is {user?.email}</div>
    </div>
  );
}

// type assertion
// export default function User() {
//   const [user, setUser] = useState<AuthUser>({} as AuthUser);
//   const handleLogin = () => {
//     setUser({
//       name: "yogi",
//       email: "yogiyagami222@gmail.com",
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>

//       <div className="">User name is {user.name}</div>
//       <div className="">User email is {user.email}</div>
//     </div>
//   );
// }
