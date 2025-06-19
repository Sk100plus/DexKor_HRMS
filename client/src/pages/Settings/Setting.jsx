import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Profile from "../Dashboard/Profile";
import Navbar from "../Navbar/Navbar";

const Setting = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "English");

  const [twoFA, setTwoFA] = useState(true);
  const [mobilePush, setMobilePush] = useState(true);
  const [desktopPush, setDesktopPush] = useState(true);
  const [emailNotify, setEmailNotify] = useState(true);

  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  useEffect(() => {
    // Apply theme class to html
    const root = window.document.documentElement;
    if (theme === "Dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className=" font-sans select-none ">
  <div>
      <Profile />
      </div>

   
    <div className="flex w-full select-none dark:bg-gray-900 dark:text-white transition">
    <div>
    <Navbar/>
    </div>
    

      <div className="w-full mx-auto bg-white dark:bg-gray-800 rounded-xl shadow px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">All System Settings</p>

        {/* Appearance */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="font-medium text-gray-800 dark:text-white">Appearance</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Customize how your theme looks on your device
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowThemeDropdown(!showThemeDropdown)}
              className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-4 py-2 text-sm dark:bg-gray-700"
            >
              {theme} <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {showThemeDropdown && (
              <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 z-10">
                {["Light", "Dark"].map((mode) => (
                  <div
                    key={mode}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => {
                      setTheme(mode);
                      setShowThemeDropdown(false);
                    }}
                  >
                    {mode}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Language */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="font-medium text-gray-800 dark:text-white">Language</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">Select your language</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-4 py-2 text-sm dark:bg-gray-700"
            >
              {language} <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 z-10">
                {["English", "Hindi", "Spanish", "French"].map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Toggle Settings */}
        {[
          ["Two-factor Authentication", "Keep your account secure by enabling 2FA via mail", twoFA, setTwoFA],
          ["Mobile Push Notifications", "Receive push notification", mobilePush, setMobilePush],
          ["Desktop Notification", "Receive push notification  in desktop", desktopPush, setDesktopPush],
          ["Email Notifications", "Receive email notification", emailNotify, setEmailNotify]
        ].map(([title, description, value, setter], idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700 last:border-none"
          >
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white">{title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={value}
                onChange={() => setter(!value)}
              />
              <div className=" pt-0.5 w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all after:translate-x-1 peer-checked:after:translate-x-6 relative" />
            </label>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Setting;
