import { useContext } from "react";
import { ThemeIsLightContext } from "./ThemeContext";
import darkLeftArrow from "../assets/arrow-back-outline.svg";
import lightLeftArrow from "../assets/arrow-back-outline-white.svg";

export default function Details() {
    const { themeIsLight } = useContext(ThemeIsLightContext);

    return (
        <div className="country-details">
            <div className="back-button__container">
                <button
                    className={themeIsLight ? "back-button light-theme-element" : "back-button dark-theme-element"}
                    type="button">
                    <img src={themeIsLight ? darkLeftArrow : lightLeftArrow} alt="left arrow icon" />
                    <span>Back</span>
                </button>
            </div>
            <div className={themeIsLight ? "content light-theme-font" : "content dark-theme-font"}>
                <div className="content__country-flag">
                    <img src="#" alt="country-flag" />
                </div>
                <div className="content__country-info">
                    <h1 className="country-info__name">Belgium</h1>
                    <div className="info-container">
                        <div className="info-1">
                            <p>
                                <b>Native name:</b> Belgie
                            </p>
                            <p>
                                <b>Population:</b> 11,319,511
                            </p>
                            <p>
                                <b>Region:</b> Europe
                            </p>
                            <p>
                                <b>Sub Region:</b> Western Europe
                            </p>
                            <p>
                                <b>Capital:</b> Brussels
                            </p>
                        </div>
                        <div className="info-2">
                            <p>
                                <b>Top Level Domain:</b> .be
                            </p>
                            <p>
                                <b>Currencies:</b> Euro
                            </p>
                            <p>
                                <b>Languages:</b> Dutch, French, German
                            </p>
                        </div>
                    </div>
                    <div className="country-info__border-countries">
                        <p>
                            <b>Border Countries:</b>
                        </p>
                        <div className="borders_buttons">
                            <button className={themeIsLight ? "light-theme-button" : "dark-theme-button"} type="button">
                                France
                            </button>
                            <button className={themeIsLight ? "light-theme-button" : "dark-theme-button"} type="button">
                                Germany
                            </button>
                            <button className={themeIsLight ? "light-theme-button" : "dark-theme-button"} type="button">
                                Netherlands
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
