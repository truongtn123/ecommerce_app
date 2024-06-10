import { createSlice } from "@reduxjs/toolkit";

const checkDefaultTheme = () => {
    const darkTheme = localStorage.getItem("darkTheme") === "true";
    // console.log(darkTheme);
    document.body.classList.toggle("dark-theme", darkTheme);
    return darkTheme;
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: checkDefaultTheme(),
});

export default themeSlice.reducer;

