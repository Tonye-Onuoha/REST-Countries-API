async function countryLoader({ params }) {
    try {
        const response = await fetch("https://rest-countries-api-bice-xi.vercel.app/data.json");
        const countries = await response.json();
        const { countryName } = params;
        const country = countries.find((country) => country.name === countryName);
        return country;
    } catch (error) {
        console.error("Loader Error:", error.message);
    }
}

export default countryLoader;
