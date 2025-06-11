import { useFetchData } from "../hooks/useFetchData";
import {
  CountryList,
  Loading,
  SearchInput,
  RegionMenu,
  ShowMessage,
} from "../components";

export const Home = () => {
  const {
    result,
    isError,
    isLoading,
    filteredCountries,
    setFilteredCountries,
  } = useFetchData();

  return (
    <>
      {isLoading && <Loading />}
      {isError && <ShowMessage message={isError.message} type="error" />}
      {!isLoading && !isError && (
        <div className="container scroll-smooth">
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </div>
      )}
    </>
  );
};
