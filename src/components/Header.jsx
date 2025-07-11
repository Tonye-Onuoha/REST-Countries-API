import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import sunImage from "../assets/sunny-outline.svg";
import moonImage from "../assets/moon-outline.svg";

export default function Header() {
    const { themeIsLight, onChangeTheme } = useContext(ThemeContext);

    return (
        <header className={themeIsLight ? "header light-theme-element" : "header dark-theme-element"}>
            <h3 className="header__heading">Where in the world?</h3>
            <div className="header__theme-selector">
                <img
                    src={themeIsLight ? moonImage : sunImage}
                    alt={themeIsLight ? "moon icon" : "sun icon"}
                    onClick={onChangeTheme}></img>
                <p className="theme-selector__text">{themeIsLight ? "Dark Mode" : "Light Mode"} </p>
            </div>
        </header>
    );
}
