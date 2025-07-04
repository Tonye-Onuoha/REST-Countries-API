import { useState } from "react";
import { ThemeIsLightContext } from "./ThemeContext";
import Header from "./Header";

export default function Layout({ children }) {
    const [themeIsLight, setThemeIsLight] = useState(true);

    const handleChangeTheme = () => setThemeIsLight(!themeIsLight);

    return (
        <ThemeIsLightContext value={{ themeIsLight: themeIsLight, onChangeTheme: handleChangeTheme }}>
            <Header />
            <main className={themeIsLight ? "light-theme-background" : "dark-theme-background"}>{children}</main>
        </ThemeIsLightContext>
    );
}
