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
        <div className="">
          <Link
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
            to="/"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.89269 3.53553L7.0712 4.71405L3.18211 8.60313L18.0314 8.60313L18.0314 10.253L3.18211 10.253L7.0712 14.1421L5.89269 15.3206L0.000132627 9.42809L5.89269 3.53553Z"
                  fill="#111827"
                />
              </g>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-full"
              src={result.flags.png}
              alt={result.flags.alt}
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result.name.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">{parseInt(result.population).toLocaleString()}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Subregion: </span>
                    <span className="font-light">{result.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">
                      {result.capital && result.capital.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Area: </span>
                    <span className="font-light">{result.area} km²</span>
                  </p>
                  <p>
                    <span className="font-semibold">Timezones: </span>
                    <span className="font-light">
                      {result.timezones && result.timezones.join(", ")}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {result.tld && result.tld.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result.currencies &&
                        Object.values(result.currencies)
                          .map((cur) => cur.name)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result.languages &&
                        Object.values(result.languages).join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Demonym: </span>
                    <span className="font-light">
                      {result.demonyms &&
                        result.demonyms.eng &&
                        result.demonyms.eng.m}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Borders: </span>
                    <span className="font-light">
                      {result.borders ? result.borders.join(", ") : "None"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <span className="font-semibold">Native Name: </span>
                <span className="font-light">
                  {result.name.nativeName &&
                    Object.values(result.name.nativeName)[0].common}
                </span>
              </div>
              <div className="mt-2">
                <span className="font-semibold">Official Name: </span>
                <span className="font-light">{result.name.official}</span>
              </div>
              <div className="mt-2">
                <span className="font-semibold">Flag Alt: </span>
                <span className="font-light">{result.flags.alt}</span>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Maps: </span>
                <span className="font-light">
                  {result.maps && (
                    <a
                      href={result.maps.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Google Maps
                    </a>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
