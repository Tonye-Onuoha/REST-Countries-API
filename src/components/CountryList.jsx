import Country from "./Country";

export default function CountryList({ countries }) {
    return (
        <div className="country-list">
            {countries.map((country) => (
                <Country key={country.name} country={country} />
            ))}
        </div>
    );
}
