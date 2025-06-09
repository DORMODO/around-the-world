import { useEffect, useState } from "react";
import {
  Header,
  Footer,
  SearchInput,
  RegionMenu,
  CountryList,
  Loading,
  ShowMessage,
} from "./components";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const fetchCountriesData = async () => {
    setLoading(true);

    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,languages",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="font-primary min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="container mx-auto px-5 md:px-0">
        {isLoading && <Loading />}
        {isError && <ShowMessage message={isError.message} type="error" />}
        {!isLoading && !isError && (
          <>
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchInput />
              <RegionMenu />
            </div>
            <CountryList data={countriesList} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
