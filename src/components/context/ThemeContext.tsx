import {createContext} from "react";
import {theme} from "./theme";

export const ThemeContexts = createContext(theme);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export default function ThemeContextxProvider({children}: ThemeContextProviderProps) {
  return <ThemeContexts.Provider value={theme}>{children}</ThemeContexts.Provider>;
}
