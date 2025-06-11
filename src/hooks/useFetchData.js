import { useEffect, useState } from "react";
import { ALL_COUNTRIES_URL, COUNTRY_DETAIL_URL } from "../constants/api";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, [country]);

  const fetchDataFromAPI = async () => {
    try {
      setLoading(true);
      let url = country ? COUNTRY_DETAIL_URL(country) : ALL_COUNTRIES_URL;

      const response = await fetch(url);
      const data = await response.json();

      if (country) {
        setResult(data[0]);
      } else {
        setResult(data);
        setFilteredCountries(data);
        localStorage.setItem("countries", JSON.stringify(data));
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));

    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    result,
    isLoading,
    isError,
    filteredCountries,
    setFilteredCountries,
  };
};
