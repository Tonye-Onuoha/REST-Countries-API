import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

export default function Country({ country }) {
    const { themeIsLight } = useContext(ThemeContext);

    return (
        <div className={themeIsLight ? "country light-theme-element" : "country dark-theme-element"}>
            <div className="country-container">
                <img src={country.flags.svg} alt="country-flag" />
            </div>
            <div className="country-info">
                <h1 className="country-info__name">
                    {country.name.length > 16 ? country.name.slice(0, 16) + "..." : country.name}
                </h1>
                <h2 className="country-info__population">
                    Population: <span className="country__text">{country.population.toLocaleString()}</span>
                </h2>
                <h2 className="country-info__region">
                    Region: <span className="country__text">{country.region}</span>
                </h2>
                <h2 className="country-info__capital">
                    Capital:{" "}
                    <span className="country__text">
                        {country.capital?.length > 17 ? country.capital.slice(0, 17) + "..." : country.capital}
                    </span>
                </h2>
            </div>
        </div>
    );
}
