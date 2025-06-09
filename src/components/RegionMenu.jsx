import Select from "react-select";

const options = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export const RegionMenu = () => {
  return (
    <Select
      placeholder="Filter by Region"
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
