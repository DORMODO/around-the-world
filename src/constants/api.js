const COMMON_COUNTRY_FIELDS = [
  "name",
  "population",
  "region",
  "capital",
  "flags",
  "languages",
];

const COUNTRY_DETAIL_FIELDS = [
  ...COMMON_COUNTRY_FIELDS,
  "currencies",
  "tld",
  "borders",
  "subregion",
  "area",
  "timezones",
  "continents",
  "demonyms",
  "flag",
  "maps",
];

export const BASE_URL = "https://restcountries.com/v3.1";
export const ALL_COUNTRIES_URL = `${BASE_URL}/all?fields=${COMMON_COUNTRY_FIELDS.join(",")}`;

export const COUNTRY_DETAIL_URL = (name) =>
  `${BASE_URL}/name/${name}?fields=${COUNTRY_DETAIL_FIELDS.join(",")}`;
