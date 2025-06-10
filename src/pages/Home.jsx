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
    filteredCountriesList,
    isError,
    isLoading,
    setFilteredCountriesList,
  } = useFetchData(false);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <ShowMessage message={isError.message} type="error" />}
      {!isLoading && !isError && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountriesList}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountriesList}
            />
          </div>
          <CountryList data={filteredCountriesList} />
        </>
      )}
    </>
  );
};
