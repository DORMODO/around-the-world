import Select from "react-select";

const options = [
  { value: "all regions", label: "All Regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "americas", label: "Americas" },
  { value: "antarctic", label: "Antarctic" },
  { value: "oceania", label: "Oceania" },
];

export const RegionMenu = ({ countriesList, filterCountriesList }) => {
  const handleRegionChange = (selectedOption) => {
    const region = selectedOption.label;

    const filteredList =
      region === "All Regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);

    filterCountriesList(filteredList);
  };

  return (
    <Select
      defaultValue={options[0]}
      onChange={handleRegionChange}
      classNames={{
        input: () => "!text-gray-800 dark:!text-gray-100",
        singleValue: () => "!text-gray-800 dark:!text-gray-100",
        placeholder: () => "!text-gray-800 dark:!text-gray-100",
        control: () =>
          "flex h-14 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 !bg-gray-100 dark:!bg-gray-800 shadow-md",
        indicatorsContainer: () => "hidden",
        option: () =>
          "!text-gray-800 dark:!text-gray-100 hover:!bg-gray-100 dark:hover:!bg-gray-700 cursor-pointer",
        menu: () => "!bg-gray-100 dark:!bg-gray-800 shadow-md",
      }}
      options={options}
    />
  );
};
