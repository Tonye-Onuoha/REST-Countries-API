import Layout from "../components/Layout";
import Details from "../components/Details";
import { useLoaderData } from "react-router";

export default function CountryDetails() {
    // loader data is available in components through useLoaderData
    const { country, countries } = useLoaderData();
    return <Details country={country} countries={countries} />;
}
