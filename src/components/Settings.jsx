import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";

const Settings = () => {
  const { setCurrentColor, setCurrentMode, currentColor, setThemeSettings } =
    useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className="fixed right-4 bottom-4 z-[1000]">
      <TooltipComponent content="Settings" position="Top">
        <button
          type="button"
          onClick={() => setThemeSettings(true)}
          style={{ background: currentColor }}
          className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full"
        >
          <FiSettings />
        </button>
      </TooltipComponent>
    </div>
  );
};

export default Settings;
