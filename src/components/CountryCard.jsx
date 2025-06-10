import { Link } from "react-router-dom";

export const CountryCard = (props) => {
  const { name, population, region, capital, flags, languages } = props;
  return (
    <Link to={`${name}`}>
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md lg:w-[264px] dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flags.png}
          alt={name}
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{parseInt(population).toLocaleString()}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital}</span>
          </p>
          <p>
            <span className="font-semibold">Languages: </span>
            <span className="font-light">
              {Object.values(languages).join(", ")}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
