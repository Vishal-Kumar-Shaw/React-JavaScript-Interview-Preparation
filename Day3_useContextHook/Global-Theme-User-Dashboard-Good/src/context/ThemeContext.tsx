import { createContext, useState, type ReactNode } from "react";

// 1. Batao ki context ke andar kya hoga
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
// created a box - that is context
export const ThemeContext = createContext<ThemeContextType | null>(null);

// provider - jo data suppy kareg
export const ThemeProvider = ({ children }: {children: ReactNode} ) =>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        console.log("Btn clicked");
         setTheme((prev: string) => (prev === "light" ? "dark" : "light"));
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
           {children}
        </ThemeContext.Provider>
    )

}

