import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import CountryList from "../components/CountryList";

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [searchInput, setSearchInput] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const dataIsFetched = !isLoading && !error && countries.length > 0;
    let searchedCountries = [];

    if (searchInput && filteredCountries.length === 0) {
        searchedCountries = countries.filter((country) =>
            country.name.toLowerCase().startsWith(searchInput.toLowerCase())
        );
    } else if (searchInput && filteredCountries.length !== 0) {
        searchedCountries = filteredCountries.filter((country) =>
            country.name.toLowerCase().startsWith(searchInput.toLowerCase())
        );
    } else if (filteredCountries.length !== 0) {
        searchedCountries = filteredCountries;
    }

    const handleSearchCountry = (e) => {
        setSearchInput(e.currentTarget.value);
    };

    const handleFilterRegion = (e) => {
        if (e.currentTarget.value !== "show all") {
            const filterCountries = countries.filter(
                (country) => country.region.toLowerCase() === e.currentTarget.value
            );
            setFilteredCountries(filterCountries);
        } else setFilteredCountries(countries);
    };

    useEffect(() => {
        let ignore = false;

        async function getCountries() {
            try {
                const response = await fetch("https://rest-countries-api-bice-xi.vercel.app/data.json");
                const fetchedCountries = await response.json();
                if (!ignore) {
                    setCountries(fetchedCountries);
                }
            } catch (error) {
                console.error(error.message);
                setError("Error! Unable to load countries.");
            } finally {
                setIsLoading(false);
            }
        }

        getCountries();

        return () => (ignore = true);
    }, []);

    return (
        <>
            <Input onSearch={handleSearchCountry} onFilter={handleFilterRegion} />
            <>
                {isLoading && (
                    <div className="loading-container">
                        <h2 className="loading-text">Please wait, loading countries...</h2>
                    </div>
                )}
                {!isLoading && error && (
                    <div className="error-container">
                        <h2 className="error-text">{error}</h2>
                    </div>
                )}

                {dataIsFetched && (
                    <CountryList
                        countries={searchInput || searchedCountries.length > 0 ? searchedCountries : countries}
                    />
                )}
            </>
        </>
    );
}
