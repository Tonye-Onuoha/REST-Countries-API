import { useContext } from "react";
import { ThemeIsLightContext } from "./ThemeContext";

export default function Input() {
    const { themeIsLight } = useContext(ThemeIsLightContext);

    return (
        <div className="input-container">
            <input
                className={themeIsLight ? "light-theme-element" : "dark-theme-element"}
                type="text"
                placeholder="Search for a country..."
            />
            <select
                className={themeIsLight ? "light-theme-element" : "dark-theme-element"}
                name="region"
                id="region"
                defaultValue="filter">
                <option value="filter" disabled>
                    Filter by Region
                </option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
}
