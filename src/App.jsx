import { Header, SearchInput, RegionMenu } from "./components";

function App(props) {
  return (
    <div className="font-primary min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchInput />
          <RegionMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
