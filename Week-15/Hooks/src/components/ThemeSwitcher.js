import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className="py-5 flex justify-center">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          onChange={() =>
            setTheme((theme) => (theme === "Light" ? "Dark" : "Light"))
          }
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded bg-white border-2 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <label
        htmlFor="toggle"
        className={
          "text-xs text-gray-700 " + (theme === "Dark" ? "text-white" : "")
        }
      >
        {theme}
      </label>
    </section>
  );
};

export default ThemeSwitcher;
