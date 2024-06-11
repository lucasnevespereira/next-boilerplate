import { THEME } from "@/constants";
import { ThemeContext } from "@/contexts/theme/provider";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

export const ThemeButton = () => {
  const { theme, changeTheme } = useContext<any>(ThemeContext);
  const toggleTheme = () => {
    if (theme === THEME.LIGHT) {
      changeTheme(THEME.DARK)
    } else {
      changeTheme(THEME.LIGHT)
    }
  }

  return (
    <button className="btn" onClick={toggleTheme}>
      {theme === THEME.LIGHT ? <Moon /> : <Sun />}
    </button>
  )
}
export default ThemeButton;