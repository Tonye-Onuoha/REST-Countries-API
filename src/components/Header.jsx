import lightMoonImage from "../assets/moon-outline.svg";

export default function Header() {
    return (
        <header className="header">
            <h3 className="header__heading">Where in the world?</h3>
            <div className="header__theme-selector">
                <img src={lightMoonImage} alt="moon icon"></img>
                <p className="theme-selector__text">Dark Mode</p>
            </div>
        </header>
    );
}
