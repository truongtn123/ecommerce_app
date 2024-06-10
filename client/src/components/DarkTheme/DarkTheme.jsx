import React, { useState } from "react";
import { IoIosPartlySunny, IoMdSunny } from "react-icons/io";

import "./darkTheme.scss";
import { useSelector } from "react-redux";

const DarkTheme = () => {
  const theme = useSelector((store) => store.darkTheme);
  const [darkTheme, setDarkTheme] = useState(theme);
  const handleDarkTheme = () => {
    const newDarkTheme = !darkTheme;
    setDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  return (
    <>
      {darkTheme ? (
        <IoIosPartlySunny onClick={handleDarkTheme} />
      ) : (
        <IoMdSunny onClick={handleDarkTheme} />
      )}
    </>
  );
};

export default DarkTheme;
