import { NotFound } from "./common/NotFound";
import { CountryCard } from "./CountryCard";
import { Loading } from "./Loading";

export const CountryList = ({ data }) => {
  if (!data) {
    return <Loading />;
  }

  return (
    <div className="mt-8 grid grid-cols-1 justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flags={country.flags}
            languages={country.languages}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};
