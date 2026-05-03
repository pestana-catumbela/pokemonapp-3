import { Colors } from '../constants/colors';
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextInterface {
    theme: Theme;
    toggleTheme: () => void;
    themeColor: typeof Colors.light | typeof Colors.dark;
};

const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeColor = Colors[theme];

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error('useTheme must be used within a ThemeProvider');

    return context;
}
