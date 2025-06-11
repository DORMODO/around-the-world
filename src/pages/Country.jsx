import { Link, useParams } from "react-router";
import { useFetchData } from "../hooks/useFetchData";
import { Loading, ShowMessage } from "../components";

export const Country = () => {
  const { country } = useParams();
  const { result, isLoading, isError } = useFetchData(country);

  return (
    <>
      {isError && <ShowMessage message={isError.message} type="error" />}
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <>
          <Link
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20 dark:bg-gray-800"
            to="/"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
                  className="dark:fill-gray-100"
                />
              </g>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-full rounded"
              src={result?.flags?.png}
              alt={result?.flags?.alt}
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result?.name?.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Area: </span>
                    <span className="font-light">
                      {parseInt(result?.area).toLocaleString()} km²
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span>{result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span>{result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span>{result?.capital}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Continent: </span>
                    <span>{result?.continents?.join(", ")}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span>{result?.tld?.join(", ")}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.keys(result.currencies)
                          .map(
                            (currency) =>
                              `${result?.currencies[currency].name} (${result?.currencies[currency].symbol})`,
                          )
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((lang) => lang)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Time Zones: </span>
                    <span className="font-light">
                      {result?.timezones?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Demonym: </span>
                    <span className="font-light">
                      {result?.demonyms?.eng?.m} (m), {result?.demonyms?.eng?.f}{" "}
                      (f)
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {result?.borders && result.borders.length > 0 && (
                  <p>
                    <span className="font-semibold">Border Countries: </span>
                    <span className="font-light">
                      {result.borders.join(", ")}
                    </span>
                  </p>
                )}
                <p>
                  <span className="font-semibold">Maps: </span>
                  <a
                    href={result?.maps?.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    View on Google Maps
                  </a>
                  {" | "}
                  <a
                    href={result?.maps?.openStreetMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    View on OpenStreetMap
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
