async function countryLoader({ params }) {
    try {
        const response = await fetch("/src/data.json");
        const countries = await response.json();
        const { countryName } = params;
        const country = countries.find((country) => country.name === countryName);
        return country;
    } catch (error) {
        console.error(error.message);
    }
}

export default countryLoader;
