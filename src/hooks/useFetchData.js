import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountriesList, setFilteredCountriesList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, [country]);

  const fetchDataFromAPI = () => {
    const fields = [
      "name",
      "population",
      "region",
      "capital",
      "flags",
      "languages",
      "currencies",
      "tld",
      "borders",
      "subregion",
      "area",
      "timezones",
      "continents",
      "translations",
      "demonyms",
      "flag",
      "maps",
    ];

    const url = country
      ? `https://restcountries.com/v3.1/name/${country}?fields=${fields.join(",")}`
      : "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,languages";

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          // Country page
          setResult(data[0]);
        } else {
          // Home page
          setResult(data);
          setFilteredCountriesList(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem("countries"));

    if (localData) {
      setResult(localData);
      setFilteredCountriesList(localData);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    result,
    filteredCountriesList,
    setFilteredCountriesList,
    isLoading,
    isError,
  };
};
