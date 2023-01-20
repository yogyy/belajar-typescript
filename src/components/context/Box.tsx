import {useContext} from "react";
import {ThemeContexts} from "./ThemeContext";

export default function Box() {
  const theme = useContext(ThemeContexts);
  return (
    <div
      style={{backgroundColor: theme.secondary.main, padding: "10px", color: theme.secondary.text}}>
      Constantine
    </div>
  );
}
