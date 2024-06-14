import { Theme } from "@/constants";
import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

export const ThemeButton = () => {
  const { theme, changeTheme } = useContext<any>(ThemeContext);
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      changeTheme(Theme.DARK)
    } else {
      changeTheme(Theme.LIGHT)
    }
  }

  return (
    <button className="btn" onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Moon /> : <Sun />}
    </button>
  )
}
export default ThemeButton;