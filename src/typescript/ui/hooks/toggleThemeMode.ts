import { useEffect, useState } from "react";
import { Properties } from "../../../styles/themes";

interface Option {
  name: string;
  props: Properties;
}

type ThemeModeResultArray = [number, string, Properties, () => void, boolean];

export const useThemeMode = (...opts: Option[]): ThemeModeResultArray => {
  const maximum = opts.length;
  const index = 0;
  const [themeIndex, setThemeIndex] = useState(index);
  const [themeName, setThemeName] = useState(opts[index].name);
  const [theme, setTheme] = useState(opts[index].props);

  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (index: number) => {
    const mode = opts[index];

    window.localStorage.setItem("theme-index", index.toFixed(0));
    window.localStorage.setItem("theme", mode.name);

    setThemeIndex(index);
    setThemeName(mode.name);
    setTheme(mode.props);
  };

  const toggleTheme = () => {
    if (themeIndex >= maximum - 1) setMode(0);
    else setMode(themeIndex + 1);
  };

  useEffect(() => {
    const localThemeIndex = window.localStorage.getItem("theme-index");
    if (localThemeIndex) {
      setMode(isNaN(parseInt(localThemeIndex)) ? index : parseInt(localThemeIndex));
    } else {
      setMode(themeIndex);
    }
    setComponentMounted(true);
  }, []);

  return [themeIndex, themeName, theme, toggleTheme, componentMounted];
};
