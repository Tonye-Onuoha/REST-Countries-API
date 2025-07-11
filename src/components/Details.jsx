import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import darkLeftArrow from "../assets/arrow-back-outline.svg";
import lightLeftArrow from "../assets/arrow-back-outline-white.svg";
import { Link, useNavigate } from "react-router";

export default function Details({ country, countries }) {
    const { themeIsLight } = useContext(ThemeContext);
    const navigate = useNavigate();
    const languages = country.languages?.map((language) => language.name);
    const borderSet = new Set();
    country.borders?.forEach((countryCode) => borderSet.add(countryCode));

    let borderCountries = null;

    if (borderSet.size === 0) {
        borderCountries = <p>N/A</p>;
    } else {
        borderCountries = countries.map((c) => {
            if (borderSet.has(c.alpha3Code)) {
                return (
                    <Link key={c.name} to={`/details/${c.name}`}>
                        <button className={themeIsLight ? "light-theme-button" : "dark-theme-button"} type="button">
                            {c.name}
                        </button>
                    </Link>
                );
            }
        });
    }

    const handleBackButton = () => navigate(-1);

    return (
        <div className="country-details">
            <div className="back-button__container">
                <button
                    className={themeIsLight ? "back-button light-theme-element" : "back-button dark-theme-element"}
                    type="button"
                    onClick={handleBackButton}>
                    <img src={themeIsLight ? darkLeftArrow : lightLeftArrow} alt="left arrow icon" />
                    <span>Back</span>
                </button>
            </div>
            <div className={themeIsLight ? "content light-theme-font" : "content dark-theme-font"}>
                <div className="content__country-flag">
                    <img src={country.flags.svg} alt="country-flag" />
                </div>
                <div className="content__country-info">
                    <h1 className="country-info__name">{country.name}</h1>
                    <div className="info-container">
                        <div className="info-1">
                            <p>
                                <b>Native name:</b> {country.nativeName}
                            </p>
                            <p>
                                <b>Population:</b> {country.population.toLocaleString()}
                            </p>
                            <p>
                                <b>Region:</b> {country.region}
                            </p>
                            <p>
                                <b>Sub Region:</b> {country.subregion}
                            </p>
                            <p>
                                <b>Capital:</b> {country.capital}
                            </p>
                        </div>
                        <div className="info-2">
                            <p>
                                <b>Top Level Domain:</b> {country.topLevelDomain}
                            </p>
                            <p>
                                <b>Currencies:</b> {country.currencies?.[0].name}
                            </p>
                            <p>
                                <b>Languages:</b> {languages?.join(",")}
                            </p>
                        </div>
                    </div>
                    <div className="country-info__border-countries">
                        <p>
                            <b>Border Countries:</b>
                        </p>
                        <div className="borders_buttons">{borderCountries}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
