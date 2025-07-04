import { useContext } from "react";
import { ThemeIsLightContext } from "./ThemeContext";

export default function Country({ country }) {
    const { themeIsLight } = useContext(ThemeIsLightContext);

    return (
        <div className={themeIsLight ? "country light-theme-element" : "country dark-theme-element"}>
            <div className="country-container">
                <img src={country.flags.svg} alt="country-flag" />
            </div>
            <div className="country-info">
                <h1 className="country-info__name">{country.name}</h1>
                <h2 className="country-info__population">
                    Population: <span className="country__text">{country.population}</span>
                </h2>
                <h2 className="country-info__region">
                    Region: <span className="country__text">{country.region}</span>
                </h2>
                <h2 className="country-info__capital">
                    Capital: <span className="country__text">{country.capital}</span>
                </h2>
            </div>
        </div>
    );
}
