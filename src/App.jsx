import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRoutes from "./routes";
import { ThemeSettings, Sidebar, Navbar, Footer, Settings } from "./components";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { currentMode, activeMenu, themeSettings } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <Settings />
          <div
            className={`${
              activeMenu
                ? "w-1/5 max-w-80 fixed sidebar dark:bg-secondary-dark-bg bg-white"
                : "w-0"
            }`}
          >
            <Sidebar />
          </div>

          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
                : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="md:ml-8">
              {themeSettings && <ThemeSettings />}
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
