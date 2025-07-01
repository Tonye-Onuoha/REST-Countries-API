export default function Country() {
    return (
        <div className="country">
            <div className="country-container">
                <img src="https://flagcdn.com/af.svg" alt="country-flag" />
            </div>
            <div className="country-info">
                <h1 className="country-info__name">Germany</h1>
                <h2 className="country-info__population">
                    Population: <span className="country__text">81,391,931</span>
                </h2>
                <h2 className="country-info__region">
                    Region: <span className="country__text">Europe</span>
                </h2>
                <h2 className="country-info__capital">
                    Capital: <span className="country__text">Berlin</span>
                </h2>
            </div>
        </div>
    );
}
