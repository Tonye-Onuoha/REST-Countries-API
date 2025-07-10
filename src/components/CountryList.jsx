import Country from "./Country";
import { Link } from "react-router";

export default function CountryList({ countries }) {
    return (
        <div className="country-list">
            {countries.map((country) => (
                <Link key={country.name} to={`/details/${country.name}`}>
                    <Country country={country} />
                </Link>
            ))}
        </div>
    );
}
