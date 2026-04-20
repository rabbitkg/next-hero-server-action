"use client";
import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </div>
    );
};

export default NextThemeProvider;   
