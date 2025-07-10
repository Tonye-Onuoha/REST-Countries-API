import { useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import Header from "./Header";
import { Outlet } from "react-router";

export default function Layout() {
    const [themeIsLight, setThemeIsLight] = useState(true);

    const handleChangeTheme = () => setThemeIsLight(!themeIsLight);

    return (
        <ThemeContext value={{ themeIsLight: themeIsLight, onChangeTheme: handleChangeTheme }}>
            <Header />
            <main className={themeIsLight ? "light-theme-background" : "dark-theme-background"}>
                <Outlet />
            </main>
        </ThemeContext>
    );
}
