import {useState} from "react";

type GreetProps = {
  name: string;
  pesan?: number;
  lagiLogin?: boolean;
};
export default function Greet({name, pesan = 0, lagiLogin}: GreetProps) {
  const [loged = lagiLogin, setLoged] = useState(lagiLogin);
  return (
    <div>
      <button onClick={() => setLoged(!loged)}>login</button>
      <p>{loged ? `Welcome ${name}! you have ${pesan} unread messages!` : `Welcome Guest`}</p>
    </div>
  );
}
