import "./styles.css";
import BookList from "./components/BookList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={"min:h-screen " + (theme === "Dark" ? "bg-gray-600" : "")}
      >
        <ThemeSwitcher />
        <BookList />
      </div>
    </ThemeContext.Provider>
  );
}
