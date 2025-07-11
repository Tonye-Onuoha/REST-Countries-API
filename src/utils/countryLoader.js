import { getCountries } from "./countriesStore";

function countryLoader({ params }) {
    const countries = getCountries("countries");
    const { countryName } = params;
    const country = countries.find((country) => country.name === countryName);
    return { country, countries };
}

export default countryLoader;
