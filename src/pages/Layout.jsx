import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/layout";

export const Layout = () => {
  return (
    <div className="font-primary min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="container mx-auto px-5 md:px-0">
        <Outlet />
      </main>
    </div>
  );
};
