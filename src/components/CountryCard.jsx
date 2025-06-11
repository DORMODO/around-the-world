import { Link } from "react-router-dom";

export const CountryCard = ({
  name,
  population,
  region,
  capital,
  flags,
  languages,
}) => {
  return (
    <Link
      to={`${name.common}`}
      className="block transition-transform hover:scale-103 focus:scale-105"
    >
      <div className="h-full overflow-hidden rounded bg-gray-50 shadow-md transition-shadow hover:shadow-xl sm:max-w-[340px] md:max-w-[300px] lg:w-[264px] dark:bg-gray-800 dark:shadow-gray-900">
        <div className="aspect-video w-full">
          <img
            className="h-full w-full object-cover"
            src={flags.png}
            alt={name.common}
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h2 className="mb-3 line-clamp-2 min-h-[3.5rem] text-lg font-extrabold">
            {name.common}
          </h2>

          <div className="flex flex-col gap-3">
            <p className="flex flex-wrap items-center gap-x-2">
              <span className="font-semibold">Population:</span>
              <span className="font-light">
                {parseInt(population).toLocaleString()}
              </span>
            </p>
            <p className="flex flex-wrap items-center gap-x-2">
              <span className="font-semibold">Region:</span>
              <span className="font-light">{region}</span>
            </p>
            <p className="flex flex-wrap items-center gap-x-2">
              <span className="font-semibold">Capital:</span>
              <span className="font-light">{capital}</span>
            </p>
            <p className="flex flex-wrap items-center gap-x-2">
              <span className="font-semibold">Languages:</span>
              <span className="line-clamp-2 font-light">
                {Object.values(languages).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
